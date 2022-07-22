import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from '../components/Card';
import Groups from '../components/Groups';
import BillSharing from '../Screens/BillSharing';
import Split from '../Screens/BillSharing/Split';
import AddGroup from '../Screens/BillSharing/AddGroup';

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
        <Stack.Screen name='SplitUI' component={Split}/>
        <Stack.Screen name='group' component={Groups}/>
        <Stack.Screen name='addgroup' component={AddGroup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default MainNavigation