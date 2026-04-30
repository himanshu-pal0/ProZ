import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "../theme/colors";

const data = [
  { id: "1", name: "Dr. Anjali Mehra", msg: "Please Continue..." },
  { id: "2", name: "Adv. Meera Kapoor", msg: "Lorem Ipsum..." },
];

export default function MessageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Messages</Text>

      <TextInput placeholder="Search..." style={styles.search} />

      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.msg}>{item.msg}</Text>
            </View>
            <Text style={styles.time}>8:15 PM</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },

  title: { fontSize: 22, fontWeight: "bold" },

  search: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    marginRight: 10,
  },

  name: { fontWeight: "bold" },

  msg: { color: "#777" },

  time: { fontSize: 12, color: "#999" },
});