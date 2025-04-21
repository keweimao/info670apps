import React, {useState} from 'react'; 
import {Text, View, Image, Button, FlatList} from 'react-native';

const Dog = props => {
  const [isHungry, setIsHungry] = useState(true); 
  return (
    <View>
      <Image source={require('./assets/phone.png')} style={{width:40, height:40}} />
      <Text>Hello, I am {props.name}, and I am {isHungry? "hungry" : "full"}!</Text>
      <Button 
        onPress={() => {
          setIsHungry(false); 
        }}
        title={isHungry? "Feed me!" : "Thank you!"}
      />
    </View>);
}

const Dogs = () => {
  return (
    <View>
      <Text>Welcome All!</Text>
      <Dog name="John" />
      <Dog name="Cocoa" />
      <Dog name="Joseph" />
    </View>
  );
}


const DogList = () => {
  return (
    <View>
      <FlatList 
        data={[
          {name: "John"}, 
          {name: "Cocoa"}, 
          {name: "Joe"},
        ]}
        renderItem={({item}) => <Dog name={item.name} />}
      />
    </View>
  ); 
}

export default Dogs; 