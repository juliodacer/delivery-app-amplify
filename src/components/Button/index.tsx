import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface ButtonProps {
    text: string;
    onPress: () => void;
    containerStyle?: object;
}

const Button = ({text, onPress, containerStyle}: ButtonProps) => {
    return (
       <Pressable onPress={onPress} style={[styles.root, containerStyle]}>
           <Text style={styles.text}>{text}</Text>
       </Pressable>
    )
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#A3F000',
        margin: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#68B202'
    },
    text: {
        fontSize: 16,

    }
})

export default Button
