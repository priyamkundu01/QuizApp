import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AnswerOption from "./AnswerOption";
import { Question } from "../type";
import questions from "../questions";
import Card from "./Card";

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
    <Card title={question.title}>
      {/* <Text style={styles.question}>{question.title}</Text> */}
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
    </Card>
  );
};

export default QuestionCard;