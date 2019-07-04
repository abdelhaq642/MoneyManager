import { createStackNavigator } from 'react-navigation';
  import PlanScreen from './PlanScreen';
  import BudgetScreen from './BudgetScreen';

 export const AppNavigator = createStackNavigator({
    PlanScreen: { screen: PlanScreen },
    BudgetScreen: { screen: BudgetScreen},
  });

