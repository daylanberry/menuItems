import React, { useState, useEffect, useCallback } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButtons'
import Colors from '../constants/colors'

import { StyleSheet, View, Text, Button, Switch } from 'react-native'

const FilterSwitch = props => (
  <View style={styles.filterContainer}>
    <Text>{props.label}</Text>
    <Switch
      trackColor={{true: Colors.primary}}
      onValueChange={props.toggleSwitch}
      value={props.isFree}
    />
  </View>
)

const FiltersScreen = props => {
  const { navigation } = props

  const [isGlutenFree, setIsGlutenFree ] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVeganFree, setIsVeganFree] = useState(false)
  const [isVegetarianFree, setIsVegetarianFree] = useState(false)

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      gluten: isGlutenFree,
      lactose: isLactoseFree,
      vegan: isVeganFree,
      vegetarian: isVegetarianFree
    }
    console.log(saveFilters)
  }, [isGlutenFree, isLactoseFree, isVeganFree, isVegetarianFree])

  useEffect(() => {
    navigation.setParams({ save: saveFilters })
  },[ saveFilters ])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
          <FilterSwitch
            toggleSwitch={() => setIsGlutenFree(previousState => !previousState)}
            isFree={isGlutenFree}
            label={'Gluten Free'}
          />
          <FilterSwitch
            toggleSwitch={() => setIsLactoseFree(previousState => !previousState)}
            isFree={isLactoseFree}
            label={'Lactose Free'}
          />
          <FilterSwitch
            toggleSwitch={() => setIsVeganFree(previousState => !previousState)}
            isFree={isVeganFree}
            label={'Vegan Free'}
          />
          <FilterSwitch
            toggleSwitch={() => setIsVegetarianFree(previousState => !previousState)}
            isFree={isVegetarianFree}
            label={'Vegetarian Free'}
          />
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
          iconName='ios-menu'
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Save'
          iconName='ios-save'
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    marginVertical: 15
  }
})

export default FiltersScreen