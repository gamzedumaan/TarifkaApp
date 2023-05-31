import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

export default function MealsScreen({ route }) {
  console.log(route.params.strCategory);
  const [mealsData, setMealsData] = useState([]);

  const AllMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + route.params.strCategory)
      .then((res) => res.json())
      .then((data) => {
        setMealsData(data.meals);
        console.log(mealsData.meals[0]);
      });
  };
  useEffect(() => {
    AllMeals();
  }, []);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={mealsData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', item)}>
              <View style={styles.data_Container}>
                <Image style={styles.image} source={{ uri: item.strMealThumb }} />
                <View style={{ zIndex: 1, position: 'absolute', bottom: 1 }}>
                  <View style={styles.title_Text_Container}>
                    <Text style={styles.title_Text}>{item.strMeal}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8AA42',
  },
  image: {
    height: 140,
    width: '90%',
    borderRadius: 10,
  },
  data_Container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  title_Text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  title_Text_Container: { width: '100%', backgroundColor: 'black', shadowOpacity: 10 },
});
