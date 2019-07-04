import { createStackNavigator } from 'react-navigation';
  import PlanScreen from '../SettingUp/PlanScreen';
  import BudgetScreen from '../SettingUp/BudgetScreen';
  import PayScreen from '../SettingUp/PayScreen'
  import PriorityScreen from '../SettingUp/PriorityScreen'

 export default AppNavigator = createStackNavigator({
    //Setting up Screen
    PlanScreen: { screen: PlanScreen },
    BudgetScreen: { screen: BudgetScreen},
    PayScreen: {screen: PayScreen},
    PriorityScreen:{ screen: PriorityScreen}
    
    //Home Page
  },
  {
    headerMode: 'none',
    header: null
  }
  );

