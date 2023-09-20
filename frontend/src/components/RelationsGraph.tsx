import React, { useEffect } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Canvas from "react-native-canvas";
import { useDispatch, useSelector } from "react-redux";
import { addPerson, addFriend } from "../actions/relationsActions";

export default function RelationsGraph() {
  const dispatch = useDispatch();
  const people = useSelector((store) => store.people.people);
  const graph = useSelector((store) => store.people.graph);
  useEffect(() => {
    dispatch(addPerson("a"));
    dispatch(addPerson("b"));
    console.log(people);
    console.log(graph);
  }, []);

  useEffect(() => {
    console.log(graph)
  },[graph])

  return (
    <SafeAreaView style={{ flex: 1 }}>
        {people.map((person, index) => {
          return (
            <>
              <p>{person.name}</p>
              <View style={styles.CircleShape} />
            </>
          );
        })}
        <button onClick={() => {
            dispatch(addFriend(0,1))
        }}>click me</button>
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
