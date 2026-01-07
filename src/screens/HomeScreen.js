import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function HomeScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome {user.name}</Text>
      <Text>{user.email}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}