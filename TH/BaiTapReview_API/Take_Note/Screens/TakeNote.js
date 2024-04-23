import { StyleSheet, View, Image, Pressable, ScrollView, FlatList, Touchable, } from "react-native";
import React, { useEffect, useRoute, useState } from "react";
import { Stack, Text } from "@react-native-material/core";
import { TextInput } from "react-native-web";
import axios from 'axios';

function App({ route, navigation }) {
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6544bdcd5a0b4b04436ce150.mockapi.io/noteList`)
      .then((response) => {
        setNoteList(response.data);
        console.log("Data noteList: ", noteList);
      })
      .catch((error) => {
        console.log("error noteList: ", error);
      });
  }, []);

  const NguyenVanhChanh = ({ item }) => (
    <Pressable style={{ width: "90%", height: 150, borderWidth: 1, marginVertical: 5, borderColor: "gray", borderRadius: 20, flexDirection: "row"}}>
      <View style={{flex: 4}}>
        <View style={{flex: 7, justifyContent: "center", alignItems: "center"}}>
          <Image style={{width: "50%", height: "50%", resizeMode: "contain"}} source={item.image}/>
        </View>
        <View style={{flex: 3, justifyContent: "center", alignItems: "center"}}>
        <Image style={{width: "50%", height: "50%", resizeMode: "contain"}} source={item.star}/>
        </View>
      </View>
      <View style={{flex: 6, justifyContent: "space-evenly", marginLeft: 10}}>
        <Text>{item.name}</Text>
        <Text>{item.bio}</Text>
        <Text>{item.info}</Text>
      </View>
    </Pressable>
  )

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <Pressable
            onPress={() => navigation.navigate("Login")}
          >
            <Image style={{ width: 30, height: 30, position: "absolute", left: -180, top: 10 }} source={require("../assets/favicon.png")} />
          </Pressable>
          <Text>Profile listing</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center" }}>
          <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center", paddingRight: 10 }}>
            <Image style={{ width: 20, height: 20 }} source={require("../assets/favicon.png")} />
            <TextInput style={{ borderWidth: 1, backgroundColor: "gray" }} />
          </View>
          <View>
            <Image style={{ width: 20, height: 20 }} source={require("../assets/favicon.png")} />
          </View>
        </View>
        <View style={{alignItems: "center"}}>
          <FlatList
            style={{width: "100%", marginLeft: 40}}
            data={noteList}
            keyExtractor={(item) => item.id}
            renderItem={NguyenVanhChanh}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
});

export default App;
