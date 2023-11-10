import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  return (
    <View>
      <Icon name="home" size={50} /> 
      <Text>Selamat Datang Di Toko Bunag Saya</Text>
      
      <Button title="Go to Catalog" onPress={() => navigation.navigate('Catalog')} />
    </View>
  );
}

export default Home;