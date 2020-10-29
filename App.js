import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { SafeAreaView, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import SplashScreen from './src/screens/Splash';
import { Provider } from "react-redux";
import store from "./src/store";
import Alert from './src/components/Alert';

const App = () => {
  const [showSplash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(()=> {
      
      setSplash(false);
    },3000);
  },[]);
  return (
    <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
      {showSplash ? <SplashScreen/> : <View style={{ flex: 1 }}>
        <Navigation />
        <Alert />
      </View> }
  </SafeAreaView>
  </Provider>
  );
};


export default App;