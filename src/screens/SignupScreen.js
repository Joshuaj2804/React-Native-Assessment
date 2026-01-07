import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function SignupScreen({ navigation }) {
  const { signup } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setError("All fields required");
      return;
    }
    if (password.length < 6) {
      setError("Password too short");
      return;
    }
    await signup(name, email, password);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Name</Text>
      <TextInput onChangeText={setName} style={{ borderWidth: 1 }} />
      <Text>Email</Text>
      <TextInput onChangeText={setEmail} style={{ borderWidth: 1 }} />
      <Text>Password</Text>
      <TextInput secureTextEntry onChangeText={setPassword} style={{ borderWidth: 1 }} />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <Button title="Signup" onPress={handleSignup} />
      <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}