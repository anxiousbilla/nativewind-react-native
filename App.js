import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import "./global.css";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <View className="bg-black flex items-center justify-center h-screen">
        <StatusBar style="light" />
        <Text className="color-white font-bold text-3xl mb-4">Text!</Text>
        <Card />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
