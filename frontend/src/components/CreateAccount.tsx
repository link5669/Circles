import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const CreateAccount = ({loggedIn, setLoggedIn}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    setLoggedIn("true")
    console.log("submit");
  };

  return (
    <View style={styles.container}>
      <Text>Username</Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={(e) => {
          setUsername(e);
        }}
        style={styles.input}
      />
      <Text>First Name</Text>
      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={(e) => {
          setFirstName(e);
        }}
        style={styles.input}
      />
      <Text>Last Name</Text>
      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={(e) => {
          setLastName(e);
        }}
        style={styles.input}
      />
      <Text>Email</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(e) => {
          setEmail(e);
        }}
        style={styles.input}
      />
      <Text>Password</Text>
      <TextInput
        label="Password"
        value={password}
        secureTextEntry
        style={styles.input}
        onChangeText={(e) => {
          setPassword(e);
        }}
      />
      <Button
        style={styles.button}
        onPress={(e) => setLoggedIn("profile")}
        title="Create Account"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    width: 600,
  },
  input: {
    height: 30,
    width: 200,
    marginBottom: 12,
    marginTop: 2,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateAccount;
