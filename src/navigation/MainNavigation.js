import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BillSharing from '../Screens/Reels';

const Stack = createNativeStackNavigator();

const MainNavigation = () =>{

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='BillIndex'>
        <Stack.Screen name='BillIndex' component={BillSharing}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default MainNavigation