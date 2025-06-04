import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const TestNetwork = () => {
  useEffect(() => {
    fetch("https://www.cs.drexel.edu/~wk77/server_php/addProduct.php?id=123&cat_id=456&name=Product%20Name&price=25.00")
      .then((res) => res.json())
      .then((data) => console.log("Success:", data))
      .catch((err) => console.log("Fetch error:", err.message));
  }, []);

  return (
    <View>
      <Text>Retest</Text>
    </View>
  );
};

export default TestNetwork;
