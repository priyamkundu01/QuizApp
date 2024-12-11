import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AnswerOption from "./AnswerOption";

const QuestionCard = (props) => {
  console.log(props);
  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>{props.question.title}</Text>
      <View style={{ gap: 10 }}>
        <AnswerOption option={props.question.options[0]} />
        <AnswerOption option={props.question.options[1]} />
        <AnswerOption option={props.question.options[2]} />
        <AnswerOption option={props.question.options[3]} />
      </View>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  questionCard: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 20,
    paddingVertical: 40,
    gap: 20,
    // Shaddow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  question: {
    fontSize: 24,
    fontWeight: 500,
  },
});
