import { StyleSheet, View, Text } from "react-native";

const Card = () => {
  return (
    <View className="h-1/6 w-3/6 bg-white flex items-center, justify-center">
      <Text className="color-green-500 font-bold text-lg text-center">
        Card Content
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
