import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';
import React from 'react';

export default function CategoriesArea({ onSelect, meals }) {
  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <View style={styles.area_Button}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ height: 70, width: 100 }} source={{ uri: meals.strCategoryThumb }} />
          <Text style={styles.main_Title}>{meals.strCategory}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  area_Button: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderWidth: 1,
    borderColor: '#B7B7B7',
  },
  main_Title: {
    fontSize: 20,
    marginLeft: 15,
    fontWeight: '600',
  },
});
