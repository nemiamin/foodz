import React, {useEffect, useState} from 'react';
import { View, StyleSheet, BackHandler, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { light_white, h, w } from '../assets/commons';
import Button from '../components/Button';
import TextInput from '../components/Input';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import SwipeButton from 'rn-swipe-button';
import { connect } from 'react-redux';
import { generateOTP } from '../action/auth';

const Home = ({navigation, generateOTP}) => {
    const thumbIcon = () => <Icon name="arrowright" size={50}  />;
    const [mobile, setMobile] = useState('');

    const changeInput = (e) => {
        console.log(e)
        // const {name, value} = e.target;
        setMobile(e);
    }

    const submit = async () => {
        const response = await generateOTP(mobile);
        console.log(response);
        if(response.success) {
            navigation.navigate('Login', {param: {otp: response.data }});
        }
    }

    const updateSwipeStatusMessage = () => {
        navigation.navigate('Login');
    }
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.top}>
            <ImageBackground style={{ height: h*0.7,width:w}} source={require('../assets/ellipses.png')} >
                    <View style={styles.container}>
                        <Image source={require('../assets/logo.png')} />
                    </View>
            </ImageBackground>
            </View>
            
            <View style={styles.bottom}>
                    <View style={styles.inputContainer}>
                        <TextInput change={changeInput} value={mobile} name="mobile" placeholder="Mobile" />
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={{flex:1}}></View>
                        <View style={{flex:1}}>
                        <SwipeButton title=""  containerStyles={{backgroundColor:'#C1BCBC',borderTopRightRadius: 0,borderBottomRightRadius: 0}}  railBackgroundColor="#C1BCBC" thumbIconBackgroundColor="#C1BCBC" thumbIconBorderColor="#C1BCBC" thumbIconComponent={thumbIcon} railStyles={{
              backgroundColor: 'grey',
              borderColor: 'grey',
              
            }} 
            shouldResetAfterSuccess={true}
            swipeSuccessThreshold={70}
            onSwipeSuccess={() => {
                submit()
              }}
            />
                        </View>
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
        paddingBottom:30
    },
    button_2: {
        backgroundColor:'#C1BCBC',
        borderBottomLeftRadius:30,
        borderTopLeftRadius:30,
    }
 });
 const mapStateToProps = state => ({

})

 export default connect(
    mapStateToProps, {
        generateOTP
    }
) (Home)