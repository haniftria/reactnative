/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Judul from './Components/Judul';

const instructions = Platform.select({
  
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Judul title="BIODATA"/>
      <Judul title="LOGIN"/>
        <Text style={styles.welcome}>
          Welcome!
        </Text>
        <Text style={styles.instructions}>
          Nama  : Hanif Tria Firmansyah
        </Text>
        <Text style={styles.instructions}>
          Kelas : XI RPL 3
        </Text>
        <Text style={styles.instructions}>
          No    : 23
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Image
         style={{width : 200, height : 300}}
         source={require('./aaa.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
