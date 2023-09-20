import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import Canvas from "react-native-canvas";
import { useDispatch, useSelector } from "react-redux";
import { addPerson, addFriend } from "../actions/relationsActions";
import Svg, { Path } from "react-native-svg";

export default function RelationsGraph() {
  const dispatch = useDispatch();
  const people = useSelector((store) => store.people.people);
  const graph = useSelector((store) => store.people.graph);
  const radius = people.length * 10;
  const margin = 0;
  const [calculatedCoords, setCalculatedCoords] = useState([]);

  useEffect(() => {
    dispatch(addPerson("Vinnie"));
    dispatch(addPerson("Miles"));
    dispatch(addPerson("Ravi"));
    dispatch(addPerson("Caitlyn"));
    dispatch(addPerson("Hassan"));
    dispatch(addPerson("Cameron"));
    dispatch(addPerson("Sam"));
    dispatch(addFriend(0, 1));
  }, []);

  useEffect(() => {
    if (people.length == 5) {
      const calculatedCoordsa = people.map((person, index) => {
        const angle = (index / people.length) * 2 * Math.PI;
        const x = radius * Math.cos(angle) + margin;
        const y = radius * Math.sin(angle) + margin;
        return { x: x, y: y };
      });
      setCalculatedCoords(calculatedCoordsa);
    }
  }, [people]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          position: "absolute",
          top: (radius + margin) * 2,
          left: (radius + margin) * 2,
        }}
      >
        {people.map((person, index) => {
          const angle = (index / people.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle) + margin;
          const y = radius * Math.sin(angle) + margin;
          let friend = false;
          if (graph[index][0] == 1) {
            friend = true;
          }
          return (
            <View key={index}>
              <View
                style={[
                  styles.CircleShape,
                  { position: "absolute", top: y, left: x },
                ]}
              />
              <Text
                style={[
                  styles.TextAbove,
                  { top: y - 20, left: x, alignSelf: "center" },
                ]}
              >
                {person.name}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CircleShape: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
  },
  TextAbove: {
    position: "absolute",
    top: -40,
    left: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
