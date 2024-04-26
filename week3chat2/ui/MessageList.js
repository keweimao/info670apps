import React, {useState} from 'react'; 
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper'; 
import Message from './Message';

const MessageList = () => {
    const [text, setText] = useState('');
    const [texts, setTexts] = useState([
        {sender:'Weimao', message:'Roger!'}, 
        {sender:'John', message:'Roger back!'}
    ]); 
  
    return (
      <ScrollView 
        style={[styles.shadow, 
          {
            // flex:1, 
            // flexDirection: 'column', 
            flexGrow: 0, 
            position: 'absolute', 
            left: 0, 
            right: 0, 
            top: 0, 
            paddingVertical: 30, 
          }]}>
        {/* <Message text="First message." />
        <Message text="Second message." /> */}
        {texts.map( (text, index) => (<Message key={index} text={text} />) )}
        <View>
          <TextInput 
            placeholder="Enter your message here..." 
            defaultValue={text} 
            onChangeText = { newText => setText(newText)}
            />
          <Button icon="send" raised
            onPress = {() => {
              setTexts([...texts, text]);
              setText(''); 
            }}
          >Send</Button>
        </View>
      </ScrollView>
    ); 
  }

  export default MessageList; 

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