import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://192.168.1.3:5000')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
        setCounter(data.counter);
      })
      .catch(error => console.log(error));
  };

  const incrementCounter = () => {
    fetch('http://192.168.1.3:5000/increment', { method: 'POST' })
      .then(response => response.json())
      .then(data => setCounter(data.counter))
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.counter}>Counter: {counter}</Text>
      </View>
      <Button title="Increment Counter" onPress={incrementCounter} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
});
