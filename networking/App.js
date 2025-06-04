import React, {useEffect, useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

export default function App() {
  const [students, setStudents] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://node.cci.drexel.edu:9705/students?program=Computer%20Science'); 
      const json = await response.json(); 
      if(json.students){
        setStudents(json.students); 
      }else{
        setError('No student found.'); 
      }

    } catch (err) {
      setError('Error loading students.'); 
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    fetchStudents(); 
  }, []);

  const handleItem = ({ item } ) => (
    <View>
      <Text>Name: {item.name}</Text>
      <Text>Year: {item.year}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading? (
        <ActivityIndicator size="large" />
      ) : error? 
        (
          <Text>{error}</Text>
        ) : (
          <FlatList data={students} keyExtractor={(item) => item._id} renderItem={handleItem} />
        ) 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
