import React from 'react'

import { ScrollView, StyleSheet, View, Text, Button, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { MEALS } from '../data/dummyData'
import CustomHeaderButton from '../components/HeaderButtons'
import DefaultText from '../components/DefaultText'

const ListItem = props => {
  return <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
}


const MealDetailScreen = props => {

  const categoryId = props.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === categoryId)


  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
      <View style={styles.details}>
          <DefaultText>{selectedMeal.duration}m</DefaultText>
          <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <Text style={styles.title}>Ingredients</Text>
      {
        selectedMeal.ingredients.map((ingredient, i) => <ListItem key={i}>{ingredient}</ListItem>)
      }
      <Text style={styles.title}>Steps</Text>
      {
        selectedMeal.steps.map((step, i) => <ListItem key={i}>{step}</ListItem>)
      }
      <View style={styles.screen}>
      </View>
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons
        HeaderButtonComponent={CustomHeaderButton}
      >
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => console.log('mark favorite')}
        />

    </HeaderButtons>
    )


  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
})

export default MealDetailScreen