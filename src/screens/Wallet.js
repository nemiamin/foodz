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
            <View style={styles.card}>
                <Text style={styles.title}>
                    Wallet Refill
                </Text>
                <TextInput name="mobile" bgColor="#E4DDDD" inputColor="black" placeholder="Employee ID" />
                <TextInput name="mobile" inputColor="black" bgColor="#E4DDDD" placeholder="Current Balance" />
                <TextInput name="mobile" inputColor="black" bgColor="#E4DDDD" placeholder="Refill Amount" />
            </View>

            <View style={styles.buttonContainer}>
                <Text style={styles.button}>
                    Refill
                </Text>
            </View>
            
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
    card: {
        backgroundColor:'#FFFDFD',
        borderRadius: 10,
        margin:10,
        padding:20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:10
    },
    buttonContainer: {
        backgroundColor:'#78E20D',
        margin:20,
        borderRadius:10,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    button: {
        padding:10,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        color: 'white',
        fontWeight:'bold',
        fontSize:18
    }
 });