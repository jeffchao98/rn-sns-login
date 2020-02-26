/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import { Button } from './app/component'

GoogleSignin.configure();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const signIn = async () => {
  try {
    // const isSignedIn = await GoogleSignin.isSignedIn();
    // if(isSignedIn) {
    //   await GoogleSignin.revokeAccess();
    //   await GoogleSignin.signOut();
    //   }
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.warn('ok', JSON.stringify(userInfo))
  } catch (error) {
    console.warn('error', JSON.stringify(error))
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => { signIn() }} />
    </SafeAreaView>
  )
}

export default App;
