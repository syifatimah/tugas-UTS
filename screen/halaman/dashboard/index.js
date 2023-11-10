import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const handleTopUpPress = () => {
    alert('Anda akan mengisi pulsa');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TOKO BUNGA</Text>
      <Button title="Isi Pulsa" onPress={handleTopUpPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;