/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import LoginScreen from "./src/screens/login.js";


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.container}>
         <LoginScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5896DD",
},
});

export default App;
