import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import CategoriesScreen from './screens/Categories/CategoriesScreen';
import DetailScreen from './screens/Detail/DetailScreen';
import MealsScreen from './screens/Meals/MealsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen options={{ title: 'Meals' }} name="MealsScreen" component={MealsScreen} />
        <Stack.Screen options={{ title: 'Detail' }} name="DetailScreen" component={DetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
