import React from 'react'
import MealItem from './MealItem'

import { FlatList, StyleSheet, View } from 'react-native'

const MealList = props => {

  const renderMealItem = (itemData) => {

    return (
        <MealItem
          title={itemData.item.title}
          onSelectMeal={() => {
            props.navigation.navigate({
              routeName: 'MealDetail',
              params: { mealId: itemData.item.id }
            })
          }}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          image={itemData.item.imageUrl}
        />
    )
  }

  return (
    <View style={styles.list}>
      <FlatList
        style={{width: '100%'}}
        data={props.listData}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealList