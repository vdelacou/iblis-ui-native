import { StyleSheet } from 'react-native';
import { Theme } from '../../iblis_theme';

export const style = (theme: Theme) => StyleSheet.create({
    paginationStyle: {
        position: 'absolute',
        bottom: theme.metrics.s,
        left: 0,
        right: 0,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    dotView: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    buttonStyle: {
        position: 'absolute',
        bottom: theme.metrics.s,
        right: theme.metrics.s,
    },
});
