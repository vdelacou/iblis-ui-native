import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: 71,
        height: 30,
        borderRadius: 30,
        backgroundColor: 'black',
        // overflow: 'hidden'
    },
    animatedContainer: {
        flex: 1,
        width: 78,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        borderColor: 'rgb(100, 100, 100)',
    },
    text: {
        backgroundColor: 'transparent',
    },
    paddingRight: {
        paddingRight: 5,
    },
    paddingLeft: {
        paddingLeft: 5,
    },
});
