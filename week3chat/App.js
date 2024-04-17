import React, {useState} from 'react'; 
import {StyleSheet, Alert, Text, TextInput, View, Image, Button, FlatList} from 'react-native';

const Dog = props => {
  const [isHungry, setIsHungry] = useState(true); 
  return (
    <View style={[styles.messageBlock]}>
      <Image source={require("./img/icon.png")} style={{width:50,height:50, margin: 10}}/>
      <Text style={{flex: 1}}>Hello, I am {props.name}, and I am {isHungry? "hungry" : "full"}!</Text>
      <Button  style={{width:50,height:50}}
        onPress={() => {
          setIsHungry(false); 
        }}
        title={isHungry? "Feed me!" : "Thank you!"}
      />
    </View>);
}

const Dogs = () => {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState(['Hello', 'World']); // Initial array of texts

  return (
    <View style={[styles.messageContainer]}>
      <Text>Welcome All!</Text>
      {/* <Dog name="John" />
      <Dog name="Cocoa" />
      <Dog name="Joseph" /> */}

      {texts.map((text, index) => (
        <Dog key={index} name={text} />
      ))}
      <View style={{flexDirection:'row', flex:1, height:20}}>
        <TextInput
          style={{flex:1}}
          placeholder="Type here to translate!"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <Button 
          onPress = {() => {
            setTexts([...texts, text]);
          }}
          title="Send"
        />
      </View>
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

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1, 
    // flexDirection: 'row', 
    backgroundColor: 'skyblue',  
    alignItems: 'center', 
    justifyContent: 'center'
  }, 
  messageBlock: {
    flex: 1, 
    flexDirection: 'row', 
    backgroundColor: 'skyblue',  
    alignItems: 'flex-start', 
    // justifyContent: 'center'
    // justifyContent: 'space-in-between'
    justifyContent: 'flex-end'
  }
}); 


export default Dogs; 