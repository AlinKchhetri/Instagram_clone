import {Image} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import Shop from '../Screens/Shop'
import Explore from '../Screens/Explore';
import Reels from '../Screens/Reels';

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
        height: 84, 
        backgroundColor: '#000', 
        borderColor: '#262626',
        borderTopWidth: 0
      },
    }}>
      <Tab.Screen name='Home' component={Home} 
      options={{
        tabBarIcon: () => {
          return (
            <Image
              style={{  width: 22, height: 22}}
              source={require('../assets/DarkMode/home.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='Search' component={Explore} 
      options={{
        tabBarIcon: () => {
          return (
            <Image
              style={{  width: 22, height: 22 }}
              source={require('../assets/DarkMode/search.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='Post' component={Reels} 
      options={{
        tabBarIcon: () => {
          return (
            <Image
              style={{  width: 22, height: 22}}
              source={require('../assets/DarkMode/reel.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='Shop' component={Shop} 
      options={{
        tabBarIcon: () => {
          return (
            <Image
              style={{ width: 22, height: 24 }}
              source={require('../assets/DarkMode/shop.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='Profile' component={Profile} 
      options={{
        tabBarIcon: () => {
          return (
            <Image
              style={{  width: 22, height: 22}}
              source={require('../assets/DarkMode/user.png')}
            />
          );
        },
      }}/>

    </Tab.Navigator>
    </NavigationContainer>
    
  )
}

export default TabNavigator