import { Platform } from 'react-native'
import Colors from '../constants/colors'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

// import { createBottomTabNavigator } from 'react-navigation-tab'
// import { createDrawerNavigator } from 'react-navigation-drawer'

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories',
    }
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen,
}, {

  defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
})

export default createAppContainer(MealsNavigator)