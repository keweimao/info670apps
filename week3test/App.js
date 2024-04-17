import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button, Alert} from 'react-native';

// const Flex = () => {
export default class Flex extends Component {
  _onPressButton = () => {
    console.log("Button pressed!");
    Alert.alert('You tapped the button!');
  }

  render(){
    return (
      <View
        style={[
          styles.container,
          {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'column',
              // flexDirection: 'row',
            },
          ]}>
          <View style={{flex: 1, backgroundColor: 'red',  alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[styles.label]}>Welcome! </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'darkorange'}}>
            <Image source={require('./assets/icon.png')} style={{width:40, height:40}} />
            <Text>This is an Icon</Text>
            <Button onPress={this._onPressButton} title="Press Me" style={styles.buttonContainer} />
          </View>
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'green'}}> 
            <Button onPress={this._onPressButton} title="Press Me Too" style={styles.alternativeLayoutButtonContainer} />
            <Button onPress={this._onPressButton} title="Press Me Three" style={styles.alternativeLayoutButtonContainer} />
          </View>
        </View>
      );
    }
  }

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontWeight: 'bold', 
    fontSize: 40, 
  }, 
  label: {
    fontWeight: 'bold', 
    fontSize: 20, 
  }, 
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

// export default Flex;


