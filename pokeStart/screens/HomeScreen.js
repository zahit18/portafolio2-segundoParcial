import React from 'react'
import { View, Text, StyleSheet, Toachableopacity} from "react-native"
import {useNavigation } from 'react'

export default function HomeScreen(){
    const navigation = useNavigation();
    return(
        <View>
            <Text style={styles.text}>Hello home screen</Text>
            <Toachableopacity>
                <Text style={styles.textTouch}
                    onPress={()=> navigation.navigate('StackScreen')}
                    >Go to Stack Screen</Text>
            </Toachableopacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        alignItems: 'center',
    },
    textTouch: {
        fontSize: 16,
        color: 'white',
        alignItems: 'center',
    },
    button:{
        backgroundColor: 'purple',
        padding: 10,
        marginTop: '20%',
        width: '50%',
        alignSelf: 'center',
        borderRadius: '50%'
        
    }
})