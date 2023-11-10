import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Anda dapat mengganti "FontAwesome" dengan ikon yang Anda inginkan.

const Checkout = ({ navigation }) => {
  return (
    <View>
      <Icon name="shopping-cart" size={50} /> {/* Ganti "shopping-cart" dengan ikon yang sesuai */}
      <Text>Checkout</Text>
      {/* Tambahkan proses checkout di sini */}
      <Button title="Go back to Catalog" onPress={() => navigation.navigate('Catalog')} />
    </View>
  );
}

export default Checkout;