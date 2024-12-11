import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AnswerOption from "./AnswerOption";
import { Question } from "../type";
import questions from "../questions";

/* type Question = {
  title: string;
  options: string[];
}; */

type QuestionCard = {
  question: Question;
};

const optionSelected = (option: string) => {
  console.log("pressed!!!!!!!");
};

const QuestionCard = ({ question }: QuestionCard) => {
  const selectedOption = question.options[2];
  console.log(question.options);
  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>{question.title}</Text>
      <View style={{ gap: 10 }}>
        {question.options.map((option, index) => (
          <AnswerOption
            // key={index}
            key={option}
            option={option}
            isSelected={option === selectedOption}
            onPress={() => optionSelected(option)}
          />
        ))}
        {/* <AnswerOption
          option={question.options[0]}
          isSelected={question.options[0] === selectedOption}
          // onPress={optionSelected}
          onPress={() => optionSelected(question.options[0])}
        />
        <AnswerOption
          option={question.options[1]}
          isSelected={question.options[1] === selectedOption}
          // onPress={optionSelected}
          onPress={() => optionSelected(question.options[1])}
        />
        <AnswerOption
          option={question.options[2]}
          isSelected={question.options[2] === selectedOption}
          // onPress={optionSelected}
          onPress={() => optionSelected(question.options[2])}
        />
        <AnswerOption
          option={question.options[3]}
          isSelected={question.options[3] === selectedOption}
          // onPress={optionSelected}
          onPress={() => optionSelected(question.options[3])}
        /> */}
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
