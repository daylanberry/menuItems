import React from 'react'
import { Stack,
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native'

import { CATEGORIES } from '../data/dummyData'
import CategoryGridTitle from '../components/CategoryGridTitle'



const CategoriesScreen = props => {

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        id={itemData.item.id}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
              title: itemData.item.title
            }
          })
        }}
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoriesScreen