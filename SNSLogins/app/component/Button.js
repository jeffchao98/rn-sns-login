import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        margin: 10
    }
})

export default Button = ({ onPress, title }) => {
    return  (
        <TouchableOpacity style={styles.button} onPress={()=>{ onPress && onPress() }}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}