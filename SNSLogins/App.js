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
import { LoginManager, AccessToken } from "react-native-fbsdk";

import { Button } from './app/component'

GoogleSignin.configure({
  webClientId: '544976777026-0sgs7oeousa2i18nh5g03cb6oj39dbhq.apps.googleusercontent.com'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const signIn = async () => {
  try {
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

const fbSignIn = () => {
  LoginManager.logInWithPermissions(["public_profile"]).then(
    function(result) {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.warn('ok', JSON.stringify(result))
        AccessToken.getCurrentAccessToken().then(
          (data) => {
            console.warn('token', data.accessToken.toString())
          }
        )
        console.log(
          "Login success with permissions: " +
            result.grantedPermissions.toString()
        );
      }
    },
    function(error) {
      console.log("Login fail with error: " + error);
    }
  );
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => { signIn() }} />
      <Button onPress={() => { fbSignIn() }} />
    </SafeAreaView>
  )
}

export default App;
