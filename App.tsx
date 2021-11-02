import React from 'react';
import { StyleSheet, View } from 'react-native';;
import Router from './src/router';

import Amplify from 'aws-amplify'
import {withAuthenticator} from 'aws-amplify-react-native';
import config from './src/aws-exports'
Amplify.configure(config)


const App = () => {
  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default  withAuthenticator(App);