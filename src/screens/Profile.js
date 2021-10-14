import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const ProfileScreen = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}
    >
      <Text>ProfileScreen</Text>
      <Icon name="rocket" size={70} color="#900" />
    </View>
  )
}
export default ProfileScreen
