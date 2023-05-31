import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import CategoriesArea from '../../components/CategoriesArea';

export default function CategoriesScreen() {
  const navigation = useNavigation();
  const [mealsData, setMealsData] = useState([]);

  const AllMeals = () => {
    fetch('http://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => res.json())
      .then((data) => {
        setMealsData(data);
        console.log(mealsData);
      });
  };
  useEffect(() => {
    AllMeals();
  }, []);
  const FoodTitles = ({ item }) => {
    return (
      <CategoriesArea meals={item} onSelect={() => navigation.navigate('MealsScreen', item)} />
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <FlatList data={mealsData?.categories} renderItem={FoodTitles} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8AA42',
  },
});
