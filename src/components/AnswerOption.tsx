import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type AnswerOptionProps = {
  option: string;
  isSelected: boolean;
  // onPress: (option:string) => void;
  onPress: () => void;
};

const AnswerOption = ({ option, isSelected, onPress }: AnswerOptionProps) => {
  return (
    <Pressable
      // onPress={() => onPress(option)}
      onPress={onPress}
      style={[styles.container, isSelected && { backgroundColor: "#e1f396" }]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
};

export default AnswerOption;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 100,
  },
});
