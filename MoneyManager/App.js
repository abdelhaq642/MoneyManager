import React from 'react';
import {TextInput, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import {Button} from 'react-native';
import {createStackNavigator, createAppContainer}  from 'react-navigation';
import { withNavigation } from 'react-navigation';
import Appnavigator from './app/Components/Appnavigator';




// export default class App extends React.Component {
 
//   render(){
//     const { navigation } = this.props;
//     return(
      
//      <View style = {styles.container}>
//        <Appnavigator navigation={navigation}></Appnavigator>
//        <Text style = {{fontSize: 30, color:'white', textAlign: 'center', bottom:100}}>Welcome, Press Next on the bottom right to continue.</Text>
//        <View style = {styles.nextStep}>
//        <Button 

//        onPress = {() => {this.props.navigator.navigate('PlanScreen')} }
//        title = 'Next Step'
//        color = 'green'
       
//        />
//        </View>

       

       
//      </View>
//     );
//   }
// }

const App = createAppContainer(Appnavigator);

export default App;



// export const Navigate = createStackNavigator({
//   Plan: {  screen: PlanScreen},
//   Budget: { screen: BudgetScreen},



// });



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


