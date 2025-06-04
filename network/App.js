import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://node.cci.drexel.edu:9705/students');
      const json = await response.json();
      if (json.students) {
        setStudents(json.students);
      } else {
        setError('No student data found.');
      }
    } catch (err) {
      setError('Fetch error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>Name: {item.name}</Text>
      <Text>Age: {item.age}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student List</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={students}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default StudentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  item: {
    marginBottom: 12,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  name: {
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});
