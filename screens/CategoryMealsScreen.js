import React from 'react'

import { StyleSheet, View, Text, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummyData'
import Colors from '../constants/colors'
import MealItem from '../components/MealItem'


const CategoryMealScreen = props => {

  const renderMealItem = (itemData) => {

    return (
        <MealItem
          title={itemData.item.title}
          onSelect={() => {}}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          image={itemData.item.imageUrl}
        />
    )
  }


  const catId = props.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  const displayedMeals = MEALS.filter(meal => meal.categoryId.includes(catId))

  return (
    <View style={styles.screen}>
      <FlatList
        style={{width: '100%'}}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  )
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle: selectedCategory.title,
  }

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealScreen