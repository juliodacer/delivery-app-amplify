import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        marginTop: 40,
        backgroundColor: 'white',
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 18
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    },
    description: {
        marginVertical: 10,
        lineHeight: 20
    }
})

export default styles;