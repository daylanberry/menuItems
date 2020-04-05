import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButtons'

import { StyleSheet, View, Text, Button, Switch } from 'react-native'


const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screen}>Available Filters / Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>Gluten-Free</Text>
        <Switch />
      </View>
    </View>
  )
}

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='filter'
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FiltersScreen