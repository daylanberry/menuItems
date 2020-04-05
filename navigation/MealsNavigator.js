import React from 'react'
import { Platform, Text } from 'react-native'
import Colors from '../constants/colors'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButtons'

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}


const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: (navData) => {
      return {
        headerTitle: 'Meal Categories',
        headerLeft: () =>

        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='Menu'
            iconName='ios-menu'
            onPress={() => navData.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      }
    }
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen,
}, {

  defaultNavigationOptions: defaultStackNavOptions
})

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen,
}, {
  defaultNavigationOptions: defaultStackNavOptions

})


const tabScreenConfig = {
  Meals: { screen: MealsNavigator, navigationOptions:{
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
    },
    tabBarColor: Colors.primary,
    tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
    }
  },
  Favorites: { screen: FavNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
    },
    tabBarColor: Colors.primary,
    tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Favorites'
  },
    tabBarColor: Colors.accent
  }
}

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeColor: Colors.accent,
      shifting: true
    })

    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        labelStyle: {
          fontFamily: 'open-sans-bold'
        },
        activeTintColor: Colors.accent
      }
    })

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  }, {
    navigationOptions: {
      drawerLabel: 'filters'
    },
    defaultNavigationOptions: defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.accent,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
})

// export default createAppContainer(MealsFavTabNavigator)
export default createAppContainer(MainNavigator)