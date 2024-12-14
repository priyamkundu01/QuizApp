import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import questions from "../questions";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
const question = questions[0];
const QuizScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFEF4" }}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {/* Body */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.timer}>20 sec</Text>
          </View>
        ) : (
          <Card title="Well Done!">
            <Text>Correct answers: 3/5</Text>
            <Text>Best score: 10</Text>
          </Card>
        )}

        {/* Footer */}
        <CustomButton
          title="Next"
          rightIcon={
            <FontAwesome6
              name="arrow-right-long"
              size={16}
              color="white"
            />
          }
          onPress={() => console.warn("Custom Pressed")}
        />
        {/* <Pressable
          onPress={() => console.warn("Pressed")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Next</Text>
          <FontAwesome6
            name="arrow-right-long"
            size={16}
            color="white"
            style={styles.buttonIcon}
          />
        </Pressable> */}
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: "#005055",
  },
  timer: {
    marginVertical: 15,
    textAlign: "center",
    color: "#005055",
    fontWeight: "bold",
  },
  /* button: {
    width: "100%",
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  buttonIcon: {
    position: "absolute",
    right: 20,
  }, */
});
