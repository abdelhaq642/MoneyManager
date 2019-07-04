import React from 'react'
import {TextInput, StyleSheet, Text, View, Button } from 'react-native';

export default class PayScreen extends React.Component{

    render(){

        return(

            <View style = {styles.container}>
          
         
          <Text style = {{fontSize: 30, color:'white', textAlign: 'center', bottom:100}}>
            How often do you get paid?
          </Text>
          
          <TextInput style = {{height: 40, width: 200, margin: 20, borderColor: 'gray', textAlign: 'center', backgroundColor: 'white', borderWidth: 1}}/>
          
          <View style ={styles.nextStep}>
            <Button 
            title = "Next Step" 
            color = 'white'
            onPress = {() => this.props.navigation.navigate('PriorityScreen')}
            />

          </View>

          <View style ={styles.Back}>

            <Button 

            title = "Back"
            color = 'white'
            onPress = {() => this.props.navigation.navigate('BudgetScreen')}
            
            />
         </View>
          
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
        bottom: 10,
        left: 10,
    }
  });