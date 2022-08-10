import React from "react";
import {SafeAreaView,StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';
export const SplashScreen=()=>{
    return(
      <SafeAreaView style={styles.container}>
      <Lottie 
        source={require('../assets/splash.json')} 
        autoPlay 
        loop
      />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});