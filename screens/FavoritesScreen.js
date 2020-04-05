import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummyData'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButtons'

const FavoritesScreen = props => {

  const favMeals = MEALS.filter(meal => meal.id === 'm1')
  return (
    <MealList listData={favMeals} navigation={props.navigation}/>
  )
}

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='favorites'
          iconName='ios-search'
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  }
}



export default FavoritesScreen