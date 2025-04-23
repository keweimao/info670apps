import React, {useState} from 'react'; 
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper'; 
import MessageList from './ui/MessageList';
import {name as appName} from './app.json'; 

const theme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors, 
    primary: 'blue', 
    secondary: 'skyblue', 
  }
}

const ChatScreen = ( (navigation) => {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <MessageList />
      </View>
      <Button
        onPress={() => navigation.navigate('Next')}
      >Go Next!</Button>
    </PaperProvider>
  );
})

const NextScreen = ( (navigation) => {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Text>This is the Next Screen.</Text>
      </View>
    </PaperProvider>
  );
})

const Stack = createNativeStackNavigator(); 
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
