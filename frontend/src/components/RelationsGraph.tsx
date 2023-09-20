import React, { useEffect } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Canvas from "react-native-canvas";
import { useDispatch, useSelector } from "react-redux";
import { addPerson } from "../actions/relationsActions";

export default function RelationsGraph() {
    const dispatch = useDispatch()
    const people = useSelector((store) => store.people.people)
  useEffect(()=>{
    dispatch(addPerson("a"))
    console.log(people)
  },[])


  return (
    <SafeAreaView style={{ flex: 1 }}>
        <p>asjkd</p>
      <>
      {people.map((person, index) => {
        return <p>{person.name}</p>
      })}
        {/* {graph.getAllPeople().map((person, index) => {
          <>
            <p key={index}>{person.name}</p>
            <View style={styles.CircleShape} />
          </>;
        })} */}
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
