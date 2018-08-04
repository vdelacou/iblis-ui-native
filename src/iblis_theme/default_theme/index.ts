import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';
import { Theme } from '../theme';
import { Metric } from '../theme/metric';
import { Color, Palette } from '../theme/palette';
import { Typography } from '../theme/typography';

// Metrics
const { width, height } = Dimensions.get('window');

const statusBarHeight = (Platform.OS === 'android') ? StatusBar.currentHeight ? StatusBar.currentHeight : 0 : 0;

const defaultMetrics: Metric = {
    navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? (height - statusBarHeight) : (width - statusBarHeight),
    tabBarHeight: PixelRatio.roundToNearestPixel(16),
    zero: PixelRatio.roundToNearestPixel(0),
    xxs: PixelRatio.roundToNearestPixel(5),
    xs: PixelRatio.roundToNearestPixel(10),
    s: PixelRatio.roundToNearestPixel(15),
    m: PixelRatio.roundToNearestPixel(18),
    l: PixelRatio.roundToNearestPixel(20),
    xl: PixelRatio.roundToNearestPixel(30),
    xxl: PixelRatio.roundToNearestPixel(40),
    stroke: PixelRatio.roundToNearestPixel(1),
};

// Palette
const PRIMARY_COLOR = '#007ca0';
const SECONDARY_COLOR = '#df524e';
const BACKGROUND_COLOR = '#dddddd';

// Generate with http://mcg.mbitson.com
const primaryPalette: Color = {
    50: '#e0eff4',
    100: '#b3d8e3',
    200: '#80bed0',
    300: '#4da3bd',
    400: '#2690ae',
    500: PRIMARY_COLOR,
    600: '#007498',
    700: '#00698e',
    800: '#005f84',
    900: '#004c73',
    A100: '#a1daff',
    A200: '#6ec5ff',
    A400: '#3bb1ff',
    A700: '#22a7ff',
};
const secondaryPalette: Color = {
    50: '#fbeaea',
    100: '#f5cbca',
    200: '#efa9a7',
    300: '#e98683',
    400: '#e46c69',
    500: SECONDARY_COLOR,
    600: '#db4b47',
    700: '#d7413d',
    800: '#d23835',
    900: '#ca2825',
    A100: '#ffffff',
    A200: '#ffd4d3',
    A400: '#ffa1a0',
    A700: '#ff8886',
};

const greyPalette: Color = {
    50: '#fbfbfb',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e7e7e7',
    400: '#e2e2e2',
    500: BACKGROUND_COLOR,
    600: '#d9d9d9',
    700: '#d4d4d4',
    800: '#cfcfcf',
    900: '#c7c7c7',
    A100: '#ffffff',
    A200: '#ffffff',
    A400: '#ffffff',
    A700: '#ffffff',
};

const defaultPalette: Palette = {
    primary: primaryPalette,
    secondary: secondaryPalette,
    grey: greyPalette,
    background: BACKGROUND_COLOR,
    error: SECONDARY_COLOR,
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
};

// Typography

const fontSize = 14;

const defaultTypography: Typography = {
    display4: {
        fontSize: PixelRatio.getFontScale() * fontSize * 7,
        fontWeight: '300',
        letterSpacing: PixelRatio.getFontScale() * fontSize * 7 * -.04,
        lineHeight: PixelRatio.getFontScale() * fontSize * 7 * 1.14286,
        marginLeft: PixelRatio.getFontScale() * fontSize * 7 * -.04,
        color: defaultPalette.black,
    },
    display3: {
        fontSize: PixelRatio.getFontScale() * fontSize * 3.5,
        fontWeight: '400',
        letterSpacing: PixelRatio.getFontScale() * fontSize * 3.5 * -.02,
        lineHeight: PixelRatio.getFontScale() * fontSize * 3.5 * 1.30357,
        marginLeft: PixelRatio.getFontScale() * fontSize * 3.5 * -.02,
        color: defaultPalette.black,
    },
    display2: {
        fontSize: PixelRatio.getFontScale() * fontSize * 2.8125,
        fontWeight: '400',
        lineHeight: PixelRatio.getFontScale() * fontSize * 2.8125 * 1.13333,
        marginLeft: PixelRatio.getFontScale() * fontSize * 2.8125 * -.02,
        color: defaultPalette.black,
    },
    display1: {
        fontSize: PixelRatio.getFontScale() * fontSize * 2.125,
        fontWeight: '400',
        lineHeight: PixelRatio.getFontScale() * fontSize * 2.125 * 1.20588,
        color: defaultPalette.black,
    },
    headline: {
        fontSize: PixelRatio.getFontScale() * fontSize * 1.5,
        fontWeight: '400',
        lineHeight: PixelRatio.getFontScale() * fontSize * 1.5 * 1.35417,
        color: defaultPalette.black,
    },
    title: {
        fontSize: PixelRatio.getFontScale() * fontSize * 1.3125,
        fontWeight: '500',
        lineHeight: PixelRatio.getFontScale() * fontSize * 1.3125 * 1.16667,
        color: defaultPalette.black,
    },
    subheading: {
        fontSize: PixelRatio.getFontScale() * fontSize * 1,
        fontWeight: '500',
        lineHeight: PixelRatio.getFontScale() * fontSize * 1 * 1.5,
        color: defaultPalette.black,
    },
    body2: {
        fontSize: PixelRatio.getFontScale() * fontSize * 0.875,
        fontWeight: '500',
        lineHeight: PixelRatio.getFontScale() * fontSize * 0.875 * 1.71429,
        color: defaultPalette.black,
    },
    body1: {
        fontSize: PixelRatio.getFontScale() * fontSize * 0.875,
        fontWeight: '400',
        lineHeight: PixelRatio.getFontScale() * fontSize * 0.875 * 1.46429,
        color: defaultPalette.black,
    },
    caption: {
        fontSize: PixelRatio.getFontScale() * fontSize * 0.75,
        fontWeight: '400',
        lineHeight: PixelRatio.getFontScale() * fontSize * 0.75 * 1.375,
        color: defaultPalette.black,
    },
    button: {
        fontSize: PixelRatio.getFontScale() * fontSize * 0.875,
        fontWeight: '500',
        textTransform: 'uppercase',
        color: defaultPalette.black,
    },
};

export const theme: Theme = {
    metrics: defaultMetrics,
    palette: defaultPalette,
    typography: defaultTypography,
};
