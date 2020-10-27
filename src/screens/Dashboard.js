import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { light_white, h, w } from '../assets/commons';
import Button from '../components/Button';
import TextInput from '../components/Input';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header';

export default ({navigation}) => {
    return (
        <ScrollView style={styles.mainContainer}>
            <Header navigation={navigation} />
            <TouchableOpacity onPress={()=>navigation.navigate('Companies')} style={styles.top}>
                <View style={{justifyContent:'center',
        alignContent:'center',
        alignItems:'center'}}>
                    <Image source={require('../assets/list.png')} />
                    <Text style={{color: 'white', fontSize:30, fontWeight:'bold', marginTop:20,}}>List Of Companies</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>navigation.navigate('Wallet')} style={styles.bottom}>
            <View style={{justifyContent:'center',
        alignContent:'center',
        alignItems:'center'}}>
                    <Image source={require('../assets/wallet.png')} />
                    <Text style={{color: 'white', fontSize:30, fontWeight:'bold', marginTop:20}}>Wallet Refill</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20
    },
    top: {
        backgroundColor:'#ED2124',
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        paddingTop: h/12,
        paddingBottom: h/12,
        margin:30,
        borderRadius:20
    },
    bottom: {
        backgroundColor:'#ED2124',
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        paddingTop: h/12,
        paddingBottom: h/12,
        margin:30,
        borderRadius:20
    },
    inputContainer: {
        // flex:1,
        paddingHorizontal:20
    },
    buttonContainer: {
        flex:1,
        display:'flex',
        flexDirection:'row',
        marginTop:30,
        paddingBottom:30,
        justifyContent:'center'
    },
    button_2: {
        backgroundColor:'#990303',
        borderRadius:10
    }
 });