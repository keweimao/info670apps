import React, {useState} from 'react'; 
import {AppRegistry} from 'react-native'; 
import { PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ScrollView  } from 'react-native';
import {Button, Text, TextInput, Card, Avatar, IconButton } from 'react-native-paper'; 
import {name as appName} from './app.json'; 

const theme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors, 
    primary: 'tomato', 
    secondary: 'yellow', 
  }, 
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <MessageList />
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </PaperProvider>
  );
}

const MessageList = () => {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState(['Roger!', 'Roger back!']); 

  return (
    <ScrollView 
      // style={{backgroundColor: theme.colors.primary}}
    >
      {/* <Message text="First message." />
      <Message text="Second message." /> */}
      {texts.map( (text, index) => (<Message key={index} text={text} />) )}
      <View>
        <TextInput 
          placeholder="Enter your message here..." 
          defaultValue={text} 
          onChangeText = { newText => setText(newText)}
          />
        <Button icon="send" rasied
          onPress = {() => {
            setTexts([...texts, text]);
            setText('');
          }}>Send</Button>
      </View>
    </ScrollView>
  ); 
}

const Message = props => {
  return (
    // <View>
    //   <Image source={require('./img/favicon.png')} style={{width:20, height:20}} />
    //   <Text>{props.text}</Text>
    // </View>
    <Card.Title 
      title="Weimao Ke"
      subtitle="Date/Time"
      left={ (props) => <Avatar.Icon {...props} icon="message" />}
      right={ (props) => <IconButton {...props} icon="delete" 
        onPress={ () => {} }
      />}
    />
  ); 
}

AppRegistry.registerComponent(appName, () => App); 

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
