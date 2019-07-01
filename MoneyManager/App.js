import React from 'react';
import {TextInput, StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native';

import Plan from './Components/Plan';
import Budget from './Components/Budget';



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

  },

  Back: {
      position: 'absolute',
      bottom: -10,
      right: -10,
  }
});
