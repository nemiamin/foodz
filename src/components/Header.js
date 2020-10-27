
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default ({ color, text, click }) => {
    return (
        <View style={styles.header}>
            <View style={{padding:10, flexDirection:'row', flex:1, display:'flex'}}>
            <View style={{flex:1}}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>
            <View>
            <Image source={require('../assets/user.png')} style={styles.user} />
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        flex:1,
        height: 50,
        width: 50
    },
    header: {
        backgroundColor:'#ED2124',
        borderBottomEndRadius: 10,
        borderBottomStartRadius:10,
        elevation:2
    },
    user: {
        height: 50,
        width: 50 
    }
})
