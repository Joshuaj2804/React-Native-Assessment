import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("user").then(u => {
      if (u) setUser(JSON.parse(u));
    });
  }, []);

  const login = async (email, password) => {
    if (email === "test@example.com" && password === "123456") {
      const u = { name: "Test User", email };
      setUser(u);
      await AsyncStorage.setItem("user", JSON.stringify(u));
      return { success: true };
    }
    return { success: false, message: "Incorrect credentials" };
  };

  const signup = async (name, email, password) => {
    const u = { name, email };
    setUser(u);
    await AsyncStorage.setItem("user", JSON.stringify(u));
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};