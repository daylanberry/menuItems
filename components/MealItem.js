import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'


const MealItem = props => {

  return(
    <View style={styles.mealItem}>
    <TouchableOpacity onPress={props.onSelectMeal}>
      <View >
        <View style={{...styles.mealRow, ...styles.mealHeader}}>
          <ImageBackground source={{uri: props.image}} style={styles.bgImage}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{...styles.mealRow, ...styles.mealDetail}}>
          <Text>{props.duration}m</Text>
          <Text>{props.complexity.toUpperCase()}</Text>
          <Text>{props.affordability.toUpperCase()}</Text>
        </View>

      </View>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  mealRow: {
    flexDirection: 'row',
    width: '100%'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
})

export default MealItem