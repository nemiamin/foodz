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
                    LIST OF VENDORS
                </Text>
                <View style={styles.listContainer}>
                    <Text style={styles.listTitle}>
                        1) ABC
                    </Text>
                </View>

                <View style={styles.listContainer}>
                    <Text style={styles.listTitle}>
                        2) ABC
                    </Text>
                </View>


                <View style={styles.listContainer}>
                    <Text style={styles.listTitle}>
                        3) ABC
                    </Text>
                </View>
            </View>


            <View style={styles.card}>
                <View style={styles.sensorContainer}>
                    <Text style={{fontSize:18, marginBottom:10}}>Sensor Activate</Text>
                </View>


                <View style={styles.CafeContainer}>
                    <Text style={{fontSize:18, marginBottom:10}}>Cafeteria Density</Text>
                </View>

                <View style={styles.cafeButton}>
                    <Text style={styles.center}>
                        Value
                    </Text>
                </View>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('Cafeteria')} style={styles.buttonContainer}>
                <Text style={styles.button}>
                    Submit
                </Text>
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
    listContainer: {
        backgroundColor:'#E4DDDD',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10
    },
    listTitle: {
        fontSize:22,
        marginHorizontal:15,
        padding:7
    },
    sensorContainer: {
        flex:1,
        alignItems:'center',
        flexDirection:'column',
        paddingBottom: 90
    },
    CafeContainer: {
        flex:1,
        alignItems:'center'
    },
    center: {
        alignItems:'center',
        fontSize:20,
        marginHorizontal:15,
        padding:7,
        fontWeight:'bold'
    },
    cafeButton: {
        backgroundColor:'#E4DDDD',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        alignItems:'center'
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