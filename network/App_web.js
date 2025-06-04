import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddProductScreen = () => {
  const [productId, setProductId] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = async () => {
    if (!productId || !categoryId || !productName || !price) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Construct query string for GET request
    const query = `id=${encodeURIComponent(productId)}&cat_id=${encodeURIComponent(categoryId)}&name=${encodeURIComponent(productName)}&price=${encodeURIComponent(price)}`;
    const url = `https://www.cs.drexel.edu/~wk77/server_php/addProduct.php?${query}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      const text = await response.text();
      Alert.alert('Server Response', text);
    } catch (error) {
      console.log('Fetch error:', error.message);
      Alert.alert('Network error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Product ID"
        value={productId}
        onChangeText={setProductId}
      />

      <Picker
        selectedValue={categoryId}
        onValueChange={(itemValue) => setCategoryId(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Select Category" value="0" />
        <Picker.Item label="Electronics" value="1" />
        <Picker.Item label="Clothing" value="2" />
        <Picker.Item label="Books" value="3" />
        <Picker.Item label="Home Goods" value="4" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
      />

      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
    gap: 12,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
});

export default AddProductScreen;
