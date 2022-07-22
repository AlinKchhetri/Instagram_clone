import {Image} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'

import AddEvent from '../Screens/AddEvent'
import BillSharing from '../Screens/BillSharing'
import Profile from '../Screens/Profile'
import TransactionScreen from '../Screens/TransactionScreen';
import MainNavigation from './MainNavigation';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <NavigationContainer independent={true}>
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { 
        position: 'absolute', 
        height: 111, 
        backgroundColor: '#121212', 
        opacity: 0.9,
        borderRadius: 30,
        bottom: -10,
        left: 0,
        right: 0,
        elevation: 0,
        borderTopWidth: 0,
      },
    }}>
      <Tab.Screen name='Home' component={Home} 
      options={{
        tabBarIcon: ({size, focused}) => {
          return (
            <Image
              style={{  width: focused ? 30 : size, height: focused ? 30 : size , tintColor: focused ? '#439DFEE8' : 'white', bottom: focused ? 5 : 0}}
              source={require('../assets/homeIcon.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='Search' component={TransactionScreen} 
      options={{
        tabBarIcon: ({size, focused}) => {
          return (
            <Image
              style={{  width: focused ? 30 : size*1.1, height: focused ? 30 : size*1.1 , tintColor: focused ? '#439DFEE8' : 'white', bottom: focused ? 5 : 0}}
              source={require('../assets/icons/swipe-card.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='Add Event' component={AddEvent} 
      options={{
        tabBarIcon: ({ size, focused}) => {
          return (
            <Image
              style={{  width: focused ? 30 : size*1.2, height: focused ? 30 : size*1.2 , tintColor: focused ? '#439DFEE8' : 'white', bottom: focused ? 5 : 0}}
              source={require('../assets/add.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='My Events' component={MainNavigation} 
      options={{
        tabBarIcon: ({size, focused}) => {
          return (
            <Image
              style={{ width: focused ? 30 : size, height: focused ? 30 : size , tintColor: focused ? '#439DFEE8' : 'white', bottom: focused ? 5 : 0}}
              source={require('../assets/icons/transaction.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='Profile' component={Profile} 
      options={{
        tabBarIcon: ({size, focused}) => {
          return (
            <Image
              style={{  width: focused ? 30 : size, height: focused ? 30 : size , tintColor: focused ? '#439DFEE8' : 'white', bottom: focused ? 5 : 0}}
              source={require('../assets/user.png')}
            />
          );
        },
      }}/>

    </Tab.Navigator>
    </NavigationContainer>
    
  )
}

export default TabNavigator