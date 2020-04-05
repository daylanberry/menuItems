import React from 'react'

import { CATEGORIES, MEALS } from '../data/dummyData'
import Colors from '../constants/colors'
import MealList from '../components/MealList'


const CategoryMealScreen = props => {


  const catId = props.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  const displayedMeals = MEALS.filter(meal => meal.categoryId.includes(catId))

  return (
    <MealList listData={displayedMeals} navigation={props.navigation}/>
  )
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle: selectedCategory.title,
  }

}


export default CategoryMealScreen