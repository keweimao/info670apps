import React, {useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MessageList />
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const MessageList = () => {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState(['Roger!', 'Roger back!']); 

  return (
    <View style={{flex:1, flexDirection: 'column'}}>
      <Message text="First message." />
      <Message text="Second message." />
      {texts.map( (text, index) => (<Message key={index} text={text} />) )}
      <View>
        <TextInput 
          placeholder="Enter your message here..." 
          defaultValue={text} 
          onChangeText = { newText => setText(newText)}
          />
        <Button title="Send" 
          onPress = {() => {
            setTexts([...texts, text]);
          }}
        />
      </View>
    </View>
  ); 
}

const Message = props => {
  return (
    <View style={[styles.messageContainer]}>
      <Image source={require('./img/favicon.png')} style={{width:20, height:20, margin:5}} />
      <Text>{props.text}</Text>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  messageContainer: {
    flex: 1, 
    flexDirection: 'row', 
    backgroundColor: 'skyblue', 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
  }
});
