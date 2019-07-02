import React from 'react';
import {
  TextInput, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

import {createStackNavigator} from 'react-navigation';

import Plan from './Plan'


class Budget extends React.Component{

    render(){
    
        return(
        <View style = {styles.container}>
          <View style = {styles.nextStep}>
          <Button onPress={() => this.props.navigation.navigate('budget')} title = "Next Step"></Button>
          </View>

          <View style = {styles.Back}>

          <Button onPress={() => this.props.navigation.navigate('plan')} title = "Back"></Button>

          </View>

          
          <Text style = {{fontSize: 30, color:'white', textAlign: 'center', bottom:100}}>What is the budget that you are considering?</Text>
          <TextInput style = {{height: 40, width: 200, margin: 20, borderColor: 'gray', textAlign: 'center', backgroundColor: 'white', borderWidth: 1}}/>
          
    
          
          {/* TODO: make container for style */}
        </View>
        );
    
    
    };



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

  export default createStackNavigator({

    plan: Plan,
    budget: Budget,
    
});

  export default Budget;
