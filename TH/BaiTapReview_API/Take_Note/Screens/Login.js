import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useRoute, useState } from "react";
import { Stack, Text } from "@react-native-material/core";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getAccount = () => {
    axios
      .get("https://6544bdcd5a0b4b04436ce150.mockapi.io/account")
      .then((response) => {
        const user = response.data.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          navigation.replace("TakeNote", { user });
          console.log(user);
        } else {
          Alert.alert(
            "Đăng nhập không thành công. Kiểm tra lại thông tin đăng nhập."
          );
        }
      })
      .catch((err) => {
        Alert.alert("Error", err.message);
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text>
        <h1>Visily</h1>
      </Text>
      <View style={styles.input}>
        <MaterialIcons name="email" size={24} color="black" />
        <TextInput
          onChangeText={setEmail}
          value={email}
          style={{
            paddingLeft: 10,
          }}
          placeholder="input your email"
        ></TextInput>
      </View>
      <View style={styles.input}>
        <MaterialIcons name="lock" size={24} color="black" />
        <TextInput
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          style={{
            paddingLeft: 10,
          }}
          placeholder="input your password"
        ></TextInput>
      </View>
      <Pressable
        style={{
          borderWidth: 1,
          padding: 5,
          marginVertical: "5px",
        }}
        onPress={getAccount}
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flexDirection: "row",
    marginVertical: 5,
    borderWidth: 1,
    padding: 5,
  },
});

export default App;
