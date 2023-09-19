import React, { useEffect } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Canvas from "react-native-canvas";
import Singleton from "../utilities/Singleton";

export default function RelationsGraph() {
  useEffect(() => {
    console.log(Singleton.getGraph().getAllPeople());
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <>
        {Singleton.getGraph()
          .getAllPeople()
          .map((person, index) => {
            <>
              <p key={index}>{person.name}</p>
              <View style={styles.CircleShape} />
            </>;
          })}
      </>
      {/* <Canvas
        style={{ width: "100%", height: "100%", backgroundColor: "black" }}
      /> */}
    </SafeAreaView>
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
