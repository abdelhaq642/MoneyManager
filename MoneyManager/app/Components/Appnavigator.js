import { createStackNavigator } from 'react-navigation';
  import PlanScreen from '../SettingUp/PlanScreen';
  import BudgetScreen from '../SettingUp/BudgetScreen';

 export default AppNavigator = createStackNavigator({
    PlanScreen: { screen: PlanScreen },
    BudgetScreen: { screen: BudgetScreen},
  });

