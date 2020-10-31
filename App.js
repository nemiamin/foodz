import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { SafeAreaView, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import SplashScreen from './src/screens/Splash';
import { Provider } from "react-redux";
import store from "./src/store";
import Alert from './src/components/Alert';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [showSplash, setSplash] = useState(true);
  const [isuser, setUser] = useState(false)
  useEffect(() => {
    setTimeout(()=> {
      isLoggedIn()
      
    },3000);

    const isLoggedIn = async () => {
      const user = await AsyncStorage.getItem('user');
      console.log('user =+++++>', user);
      if(user) {setUser(true)}
      setSplash(false);
    }

  },[]);
  return (
    <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
      {showSplash ? <SplashScreen/> : <View style={{ flex: 1 }}>
        <Navigation isLoggedIn={isuser} />
        <Alert />
      </View> }
  </SafeAreaView>
  </Provider>
  );
};


export default App;