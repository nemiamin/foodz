
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 
import { light_white } from '../assets/commons';

export default ({ icon, value, name, change, placeholder, secure, bgColor, inputColor }) => {
    return (
        <View style={{...styles.inputContainer,backgroundColor: bgColor ? bgColor : '#949494'}}>
                     <View style={{ flex: 0.85, paddingLeft: 10 }}>
                     <TextInput onChangeText={(e) => change(e, name)} value={value} name='name' placeholder={placeholder} secureTextEntry={secure} placeholderTextColor={inputColor ? inputColor : 'white'} style={styles.input} />
                     </View>
                
                 </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        
        borderRadius: 20,
        paddingVertical: 5,
        marginVertical: 6
    },
    input: {
        color: light_white
    }
})
