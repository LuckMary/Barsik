import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}
    >
      <Text>Home</Text>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: 'blue',
          borderRadius: 5
        }}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('Add')
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16
          }}
        >
          Add
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export default HomeScreen
