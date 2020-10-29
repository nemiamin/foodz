import React, {useEffect, useState} from 'react';
import { View, StyleSheet, BackHandler, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { light_white, h, w } from '../assets/commons';
import Button from '../components/Button';
import TextInput from '../components/Input';
import { ScrollView } from 'react-native-gesture-handler';
import { loginUser } from '../action/auth';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation, route, loginUser}) => {
   

    const [loginForm, setLoginForm] = useState({mobile:'', otp:''})

    useEffect(()=>{
        console.log(route.params);
        if(route.params.otp) {
            console.log('otp', route.params.otp)
            setLoginForm({mobile: route.params.number, otp: route.params.otp})
        }

    },[]);
    const changeInput = (e) => {
        
        setLoginForm({...loginForm,mobile: e})
    }

    const changeInputOtp = (e) => {
        setLoginForm({...loginForm,otp: e})
    }

    const submit = async () => {
        console.log(loginForm)
        const response = await loginUser(loginForm);
        if(response.success) {
            // success
            AsyncStorage.setItem('loggedIn', 'true')
            navigation.navigate('Dashboard');
        }
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.top}>
            <ImageBackground style={{ height: h*0.6,width:w}} source={require('../assets/ellipses.png')} >
                    <View style={styles.container}>
                        <Image source={require('../assets/logo.png')} />
                    </View>
    
            </ImageBackground>
            </View>
            
            <View style={styles.bottom}>
                    <View style={styles.inputContainer}>
                        <TextInput name="mobile" change={changeInput} value={loginForm.mobile}  placeholder="Mobile" />
                        <TextInput name="otp" change={changeInputOtp} value={loginForm.otp} placeholder="OTP" />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button_2} onPress={() => submit()}>
                            <Text style={{padding:15, marginHorizontal:15, color: 'white', }}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                    </View>
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
        justifyContent: 'center'
    },
    top: {
        flex:1
    },
    bottom: {
        flex:1
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

 const mapStateToProps = state => ({

})

 export default connect(
    mapStateToProps, {
        loginUser
    }
) (Login)