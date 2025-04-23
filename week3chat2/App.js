import React, {useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button, ScrollView } from 'react-native';
// import {Avatar} from 'react-native-elements'; 

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
    <ScrollView 
    style={[
        styles.shadow, 
        {
          // flex:1, 
          // flexDirection: 'column'
          flexGrow: 0, 
          position: 'absolute', 
          left: 0, 
          right: 0, 
          top: 0, 
          paddingVertical: 30, 
        },
      ]}>
      <Message text="First message." />
      <Message text="Second message." />
      {texts.map( (text, index) => (<Message key={index} text={text} />) )}
      <View>
        <TextInput 
          placeholder="Enter your message here2..." 
          defaultValue={text} 
          onChangeText = { newText => setText(newText)}
          />
        <Button title="Send" 
          onPress = {() => {
            setTexts([...texts, text]);
            setText('');
          }}
        />
      </View>
    </ScrollView>
  ); 
}

const Message = props => {
  return (
    <View style={[
        styles.messageContainer,
        {
          alignItems: 'center', 
          marginHorizontal: 5, 
          marginVertical: 2
        }
      ]}>
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
  }, 
  shadow: {
    shadowColor: '#171717', 
    shadowOffsetWidth: 0, 
    shadowOffsetHeight: 2, 
    shadowOpacity: 0.2, 
    shadowRadius: 3, 
    backgroundColor: 'white', 
    zIndex: 9999, 
  }
});
