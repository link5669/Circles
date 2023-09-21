import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RelationsGraph from "./RelationsGraph";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const Profile = () => {
  const loggedInUser = useSelector((store) => store.login.user);
  return (
    <>
      {!loggedInUser ? (
        <Text>title</Text>
      ) : (
        <View style={styles.container}>
            <Text>Username</Text>
          <TextInput
            label="Username"
            value="aa"
            // onChangeText={(text) => setUsername(text)}
            style={styles.input}
          />
          <Text>Email</Text>
          <TextInput
            label="Email"
            value="aa"
            // onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <Text>Password</Text>
          <TextInput
            label="Password"
            value="{password}"
            // onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
          <Button mode="contained">
            Create Account
          </Button>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    marginBottom: 16,
  },
});
