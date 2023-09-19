import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, Component } from 'react';
import { StyleSheet, Text, View, Alert, SafeAreaView } from 'react-native';
import RelationsGraph from './utilities/RelationsGraph'
import Canvas from 'react-native-canvas'

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const ctx = ref.current.getContext('2d');

      if (ctx) {
        Alert.alert('Canvas is ready');
      }
    }
  }, [ref]);
  
  return (
    
    <View style={styles.container}>
        <Text style={styles.headerText}> Circle Shape </Text>
        <View style={styles.CircleShape} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }, 
  CircleShape: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#FF9800',
  },

});