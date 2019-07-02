import React from 'react';
import {TextInput, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Budget from './Budget';


class Plan extends React.Component{
    
      
    render(){
    
        return(
        <View style = {styles.container}>
          <View style = {styles.nextStep}>
          <Button onPress={() => this.props.navigation.navigate('budget')} title = "Next Step"></Button>
          </View>
          
          <Text style = {{fontSize: 30, color:'white', textAlign: 'center', bottom:100}}>What are you planning on saving for?</Text>
          <TextInput style = {{height: 40, width: 200, margin: 20, borderColor: 'gray', textAlign: 'center', backgroundColor: 'white', borderWidth: 1}}/>
          
    
          
          {/* TODO: make container for style */}
        </View>
        );
    
    
    };
    
    
}


export default Plan;