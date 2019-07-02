import React from 'react';
import {TextInput, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

import {Button} from 'react-native';

import Plan from './app/SettingUp/Plan';
import Budget from './app/SettingUp/Budget';



export default class App extends React.Component {
  
  render(){
    return(
      <View style = {styles.container}>
        <Plan/>
      </View>
    );
  }
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
