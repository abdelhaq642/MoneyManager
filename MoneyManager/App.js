import React from 'react';
import {TextInput, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import {Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import {PlanScreen} from './app/SettingUp/PlanScreen';
import {BudgetScreen} from './app/SettingUp/BudgetScreen';




export default class App extends React.Component {
 
  render(){
    
    return(
     <View style = {styles.container}>

       <Text style = {{fontSize: 30, color:'white', textAlign: 'center', bottom:100}}>Welcome, Press Next on the bottom right to continue.</Text>

       <View style = {styles.nextStep}>
       <Button 

       onPress = {() => this.props.navigation.navigate('PlanScreen')} 
       title = 'Next Step'
       color = 'white'
       
       />
       </View>

       

       
     </View>
    );
  }
}



export const Navigate = createStackNavigator({
  Plan: {  screen: PlanScreen},
  Budget: { screen: BudgetScreen},



});



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


