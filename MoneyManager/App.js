import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NextStep from './Components/NextStep'

export default function App() {
  return (
    <View style = {styles.container}>
      <View style = {styles.nextStep}>
      <NextStep nextStep ={this.NextStepHandler}/>
      </View>
      
      <Text style = {{fontSize: 30, color:'white', textAlign: 'center', bottom:100}}>What are you planning on saving for?</Text>
      {/* TODO: make container for style */}
    </View>
    
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
