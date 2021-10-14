import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'

import HomeScreen from './screens/Home'
import ProfileScreen from './screens/Profile'
import SubscriptionsScreen from './screens/Subscriptions'
import AddScreen from './screens/Add'

const RootStack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()
const ProfileStack = createNativeStackNavigator()
const SubscriptionsStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

// Homestack
const Home = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Feed' }}
    />
    <HomeStack.Screen
      name="Add"
      component={AddScreen}
      options={{ title: 'Add' }}
    />
  </HomeStack.Navigator>
)

const Profile = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: 'Profile' }}
    />
  </ProfileStack.Navigator>
)

const Subscriptions = () => (
  <SubscriptionsStack.Navigator>
    <SubscriptionsStack.Screen
      name="Subscriptions"
      component={SubscriptionsScreen}
      options={{ title: 'Subscriptions' }}
    />
  </SubscriptionsStack.Navigator>
)

const Tabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="ProfileStack"
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.linearGradient}
          >
            <Icon name="account-cog" color={color} size={size} />
          </LinearGradient>
        )
      }}
      component={Profile}
    />
    <Tab.Screen
      name="HomeStack"
      options={{
        tabBarLabel: 'Feed',
        tabBarIcon: ({ color, size }) => (
          <Icon
            name="image"
            color={color}
            size={size}
            style={{ marginTop: 0 }}
          />
        )
      }}
      component={Home}
    />
    <Tab.Screen
      name="SubscriptionsStack"
      options={{
        tabBarLabel: 'Subscriptions',
        tabBarIcon: ({ color, size }) => (
          <Icon
            name="account-heart"
            color={color}
            size={size}
            style={{ color: 'red' }}
          />
        )
      }}
      component={Subscriptions}
    />
  </Tab.Navigator>
)

const Root = () => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <RootStack.Screen name="Tabs" component={Tabs} />
  </RootStack.Navigator>
)

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
})

export default () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  )
}
