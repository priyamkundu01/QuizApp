import { StyleSheet, Text, View } from "react-native";
import React from "react";

type AnswerOptionProps = {};

const AnswerOption = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.option}</Text>
    </View>
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
