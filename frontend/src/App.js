import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, Component } from "react";
import { StyleSheet, Text, View, Alert, SafeAreaView } from "react-native";
import RelationsGraph from "./components/RelationsGraph";
import Canvas from "react-native-canvas";
import { Provider } from "react-redux";
import store from "./store";


export default function App() {
  useEffect(()=>{
    console.log(store.getState().people)
  },[])
  return (
    <Provider store={store}>
      <p>{store.people}</p>
      <RelationsGraph />
    </Provider>
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
    fontWeight: "bold",
  },
  CircleShape: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "#FF9800",
  },
});
