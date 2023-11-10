import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Anda dapat mengganti "FontAwesome" dengan ikon yang Anda inginkan.

const Catalog = ({ navigation }) => {
  return (
    <View>
      <Icon name="list" size={50} /> {/* Ganti "list" dengan ikon yang sesuai */}
      <Text>Flower Catalog</Text>
      {/* Tampilkan katalog produk bunga di sini */}
      <Button title="Go to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
}

export default Catalog;