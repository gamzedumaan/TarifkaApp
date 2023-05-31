import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function DetailScreen({ route }) {
  const [mealsData, setMealsData] = useState(null);
  console.log(route.params.idMeals);
  const AllMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + route.params.idMeal.toString())
      .then((res) => res.json())
      .then((data) => {
        setMealsData(data.meals[0]);
      });
  };
  useEffect(() => {
    AllMeals();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Image style={styles.images} source={{ uri: mealsData?.strMealThumb }} />
        <View style={styles.text_Container}>
          <Text style={styles.meal_Name}>{mealsData?.strMeal}</Text>
          <Text style={styles.meal_Country}>{mealsData?.strArea}</Text>
          <View style={styles.line} />
          <Text style={styles.text}>{mealsData?.strInstructions}</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => Linking.openURL(mealsData?.strYoutube)}
            style={styles.button}>
            <Text style={styles.youtube_Text}>Watch on Youtube</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F6F4',
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  images: {
    height: Dimensions.get('screen').height / 2.5,
    width: '100%',
  },
  text_Container: {
    flex: 1,
  },
  meal_Name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#D21312',
  },
  meal_Country: {
    fontSize: 22,
    fontWeight: '700',
    color: '#D21312',
  },
  text: {
    fontSize: 17,
    textAlign: 'left',
  },
  button: {
    width: '70%',
    padding: 10,
    backgroundColor: '#D21312',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  youtube_Text: {
    color: '#fff',
    fontSize: 17,
  },
  line: {
    height: 1.5,
    w: '100%',
    backgroundColor: 'grey',
  },
});
