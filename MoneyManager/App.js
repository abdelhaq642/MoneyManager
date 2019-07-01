import React from 'react';
import SettingUp from './Components/SettingUp'
import {TextInput, StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native';


export default function App() {
  
  return (
    
    <Button title = "hello"></Button>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 100,
  },

  nextStep: {
    
    position: 'absolute',
    bottom: 10,
    right: 10,

  }
});
