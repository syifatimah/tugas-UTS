import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlowerInfo = ({ flower }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{flower.name}</Text>
      <Text>{`Price: ${flower.price}`}</Text>
      <Text>{`Description: ${flower.description}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default FlowerInfo;