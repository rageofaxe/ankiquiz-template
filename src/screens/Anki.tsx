import React from "react";
import { View, Text } from "react-native";
import Stack from "@react-navigation/stack";

export default ({ navigation }: Stack.StackScreenProps<App.Routes>) => (
  <View>
    <Text>Anki</Text>
    <Text onPress={() => navigation.navigate("Quiz")}>Quiz</Text>
  </View>
);
