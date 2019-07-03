import React from 'react';
import {TextInput, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import {Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import PlanScreen from './app/Components/PlanScreen';
import BudgetScreen from './app/Components/BudgetScreen';




export default class App extends React.Component {
 
  render(){
    return(
     <navigate/>
    );
  }
}



const navigate = createStackNavigator({
  SettingUp: {
      firstScreen: PlanScreen,
      secondScreen: BudgetScreen,
  }


})



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


