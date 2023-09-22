import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logIn } from "../actions/loginActions";
import CreateAccount from "./CreateAccount";

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useState("false");
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    setLoggedInUser("true")
    dispatch(logIn(username, firstName, lastName));
  };

  if (loggedInUser == "true") {
    return <CreateAccount loggedIn={loggedInUser} setLoggedIn={setLoggedInUser}/>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Log In</Text>
        <Text>Username</Text>
        <TextInput
          label="Username"
          value={username}
          onChangeText={(e) => {
            setUsername(e);
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
          onPress={(e) => handleSubmit(e)}
          title="Log in"
        />
        <br />
        <Button
          style={styles.button}
          onPress={(e) => handleSubmit(e)}
          title="Create an account"
        />
      </View>
    );
  }
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

export default Profile;
