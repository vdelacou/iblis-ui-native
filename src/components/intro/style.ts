import { StyleSheet } from 'react-native';
import { Theme } from '../../iblis_theme';

export const style = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingRight: theme.metrics.screenWidth / 5,
        paddingLeft: theme.metrics.screenWidth / 5,
    },
    image: {
        maxHeight: theme.metrics.screenHeight / 4,
        width: '100%',
    },
    titleText: {
        ...theme.typography.title,
        paddingBottom: theme.metrics.xs,
        textAlign: 'center',
    },
    contentText: {
        ...theme.typography.body1,
        color: theme.palette.white,
        textAlign: 'center',
    },
});
