import * as React from 'react';
import { Animated, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './style';

export interface PropTypes {
    onValueChange: () => void;
    disabled: boolean;
    activeText: string;
    inActiveText: string;
    backgroundActive: string;
    backgroundInactive: string;
    value: boolean;
    circleActiveColor: string;
    circleInActiveColor: string;
    circleSize: number;
    barHeight: number;
    circleBorderWidth: number;
}

interface SwitchState {
    value: boolean;
    transformSwitch: Animated.Value;
    backgroundColor: Animated.Value;
    circleColor: Animated.Value;
}

class SwitchComponent extends React.Component<PropTypes, SwitchState> {

    constructor(props: PropTypes) {
        super(props);

        this.state = {
            value: props.value,
            transformSwitch: new Animated.Value(props.value ? props.circleSize / 2 : -1 * props.circleSize / 2),
            backgroundColor: new Animated.Value(props.value ? 75 : -75),
            circleColor: new Animated.Value(props.value ? 75 : -75),
        };

        this.handleSwitch = this.handleSwitch.bind(this);
        this.animateSwitch = this.animateSwitch.bind(this);
    }

    componentWillReceiveProps(nextProps: PropTypes) {
        const { disabled } = this.props;
        if (nextProps.value === this.props.value) {
            return;
        }
        if (disabled) {
            return;
        }

        this.animateSwitch(nextProps.value, () => {
            this.setState({ value: nextProps.value });
        });
    }

    handleSwitch() {
        const { value } = this.state;
        const { onValueChange, disabled } = this.props;
        if (disabled) {
            return;
        }

        this.animateSwitch(!value, () => {
            this.setState({ value: !value }, onValueChange);
        });
    }

    animateSwitch(value: boolean, cb: () => void) {
        Animated.parallel([
            Animated.spring(this.state.transformSwitch, {
                toValue: value ? this.props.circleSize / 2 : -this.props.circleSize / 2,
            }),
            Animated.timing(this.state.backgroundColor, {
                toValue: value ? 75 : -75,
                duration: 200,
            }),
            Animated.timing(this.state.circleColor, {
                toValue: value ? 75 : -75,
                duration: 200,
            }),
        ]).start(cb);
    }

    render() {
        const { } = this.state;

        const {
            activeText,
            inActiveText,
        } = this.props;

        return (
            <TouchableWithoutFeedback
                onPress={this.handleSwitch}
            >
                <Animated.View                >
                    <Animated.View

                    >
                        <Text style={[styles.text, styles.paddingRight]}>
                            {activeText}
                        </Text>

                        <Text style={[styles.text, styles.paddingLeft]}>
                            {inActiveText}
                        </Text>
                    </Animated.View>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

export const Switch = SwitchComponent;
