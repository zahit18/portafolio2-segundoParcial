import React from 'react'
import { View, Text, StyleSheet, } from "react-native"

export default function HomeScreen(){
    return(
        <View>
            <Text style={styles.text}>Hello home screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        alignItems: 'center',
    },
})