import React from 'react';
import {TextInput, StyleSheet, Text, View, Button } from 'react-native';


export default class PlanScreen extends React.Component{
    
      
    render(){
    
        return(
        <View style = {styles.container}>
          
         
          <Text style = {{fontSize: 30, color:'white', textAlign: 'center', bottom:100}}>
            What are you planning on saving for?
          </Text>
          
          <TextInput style = {{height: 40, width: 200, margin: 20, borderColor: 'gray', textAlign: 'center', backgroundColor: 'white', borderWidth: 1}}/>
          
          <View style ={styles.nextStep}>
            <Button 
            title = "Next Step" 
            onPress = {() => this.props.navigation.navigate('BudgetScreen')}
            />

          </View>
          
          
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

