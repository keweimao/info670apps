import React, {useState} from 'react'; 
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import {Text, TextInput, Button, Card, Avatar, IconButton} from 'react-native-paper'; 

const Message = props => {
    return (
    //   <View style={[styles.messageContainer, 
    //     {
    //       alignItem: 'center', 
    //       marginHorizontal: 5, 
    //       marginVertical: 2, 
    //     }
    //   ]}>
    //     <Image source={require('../img/favicon.png')} style={{width:20, height:20, margin:5}} />
    //     <Text>{props.text}</Text>
    //   </View>
        <>
        { props.text.sender=='Weimao'?
            <Card.Title 
                title={props.text.sender}
                subtitle={props.text.message}
                left={(props) => <Avatar.Icon {...props} icon="message" />}
                right={(props) => <IconButton {...props} icon="delete" />}
            />
            : 
            <Card.Title 
            title={props.text.sender}
            subtitle={props.text.message}
            left={(props) => <Avatar.Icon {...props} icon="message" />}
            right={(props) => <IconButton {...props} icon="send" />}
            />
        }
        </>
    ); 
  }

  export default Message; 

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