import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens/home';

export const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}}  name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};