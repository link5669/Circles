import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RelationsGraph from './utilities/RelationsGraph'

export default function App() {
  useEffect(() => {
    let gra = new RelationsGraph(3)
    gra.print()
    gra.addPerson()
    gra.print()
  },[])
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
