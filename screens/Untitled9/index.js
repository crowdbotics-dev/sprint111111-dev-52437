import { ActivityIndicator } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled9 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.BuajMqAh}></TextInput><ActivityIndicator style={styles.OJLyrKbn}></ActivityIndicator></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  SCyhNHjK: {
    height: 60,
    width: 140,
    backgroundColor: "#c02727",
    borderRadius: 0,
    color: "#777777"
  },
  BuajMqAh: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 200,
    height: 61,
    top: 212,
    left: 100,
    transform: "rotate(90deg)",
    position: "absolute"
  },
  OJLyrKbn: {
    width: 50,
    height: 50
  },
  jmoJneaa: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default Untitled9;