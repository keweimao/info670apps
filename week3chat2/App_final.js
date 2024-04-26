import React, {useState} from 'react'; 
import {AppRegistry} from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ScrollView  } from 'react-native';
import {Button, Text, TextInput, Card, Avatar, IconButton } from 'react-native-paper'; 
// import Message from './components/Message'; 
import MessageList from './components/MessageList';
// import ChatScreen from './components/ChatScreen';
import {name as appName} from './app.json'; 

const theme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors, 
    primary: 'blue', 
    secondary: 'skyblue', 
  }, 
}

const Stack = createNativeStackNavigator(); 

// const [name, setName] = useState('');

const ChatScreen = ({navigation}) => {
  const [name, setName] = useState('');
  return (
      <PaperProvider theme={theme}>
        <MessageList />
        <TextInput 
                  placeholder="Your Name" 
                  defaultValue={name} 
                  onChangeText = { newText => setName(newText)}
        />
        <Button 
          onPress={()=> navigation.navigate('Next', {name: name})}
        >Go NEXT!</Button>
      </PaperProvider>
  );
}

const NextScreen = ({navigation, route}) => {
  return (
      <PaperProvider theme={theme}>
        <View>
          {route.params.name!=''?
          <Text>{route.params.name} is NEXT. </Text>
          :
          <Text>NOTHING is NEXT. </Text>
          }
        </View>
      </PaperProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="Chat"
          component={ChatScreen}
          options={{title:"Welcome!"}}
        />
        <Stack.Screen
          name="Next"
          component={NextScreen}
          options={{title:"Another Screen"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
