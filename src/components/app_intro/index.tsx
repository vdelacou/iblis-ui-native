import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { withTheme } from '../../high_order_compoments';
import { WithTheme } from '../../iblis_theme';
import { style } from './style';

export interface AppIntroProps {
    /**
     * An array of views to display the page one by one
     */
    views: React.ReactNode[];
    /**
     * The color of the dot when they are active
     * @default #000000
     */
    activeDotColor?: string;
    /**
     * The color of the dot when they are not active
     * @default rgba(0,0,0,.2)
     */
    dotColor?: string;
    /**
     * The background color of the page
     * @default Done
     */
    doneButtonLabel?: string;
    /**
     * An array of views to display the page one by one
     */
    doneButtonAction(): void;
}

const AppIntroComponent: React.StatelessComponent<AppIntroProps & WithTheme> = (props) => {

    // Default properties
    const { activeDotColor = '#000000', dotColor = 'rgba(0,0,0,.2)', doneButtonLabel = 'Done' } = props;

    const renderDoneButton = (index: number, total: number) => {
        if (index === total - 1) {
            return (<TouchableOpacity onPress={() => props.doneButtonAction()} ><Text>{doneButtonLabel.toUpperCase()}</Text></TouchableOpacity>);
        }
        return null;
    };

    const renderPagination = (index: number, total: number) => {
        const dots = [];
        const ActiveDot = (<View style={[style(props.theme).dotView, { backgroundColor: activeDotColor }]} />);
        const Dot = (<View style={[style(props.theme).dotView, { backgroundColor: dotColor }]} />);
        for (let i = 0; i < total; i++) {
            dots.push(i === index ? React.cloneElement(ActiveDot, { key: i }) : React.cloneElement(Dot, { key: i }));
        }
        return (
            <View>
                <View pointerEvents="none" style={style(props.theme).paginationStyle}>
                    {dots}
                </View>
                <View style={[style(props.theme).buttonStyle]}>
                    {renderDoneButton(index, total)}
                </View>
            </View>
        );
    };

    return (
        <Swiper loop={false} bounces={true} renderPagination={renderPagination}>
            {/* cannot have a props named title */}
            {props.views}
        </Swiper>
    );

};

const AppIntroWithTheme = withTheme(AppIntroComponent);

/**
 * Swipe tutorial with no skip and done button on last page
 */
export const AppIntro: React.ComponentClass<AppIntroProps> = AppIntroWithTheme;
