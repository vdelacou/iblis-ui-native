import * as React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { withTheme } from '../../high_order_compoments';
import { WithTheme } from '../../iblis_theme';
import { style } from './style';

export interface IntroProps {
    /**
     * A image source to display (could be link, assets , ect ...)
     */
    imgSrc: ImageSourcePropType;
    /**
     * The main title of the page
     */
    header: string;
    /**
     * A short description text
     */
    content: string;
    /**
     * The background color of the page
     */
    backgroundColor: string;
}

const IntroComponent: React.StatelessComponent<IntroProps & WithTheme> = (props) => {
    return (
        <View style={[style(props.theme).container, { backgroundColor: props.backgroundColor }]}>
            <Image source={props.imgSrc} style={style(props.theme).image} resizeMode="contain" />
            <View>
                <Text style={style(props.theme).titleText}>{props.header.toUpperCase()}</Text>
                <Text style={style(props.theme).contentText}>{props.content.toUpperCase()}</Text>
            </View>
        </View>

    );
};

const IntroWithTheme = withTheme(IntroComponent);
/**
 * Intro Page to show in a tutorial for example
 */
export const Intro: React.ComponentClass<IntroProps> = IntroWithTheme;
