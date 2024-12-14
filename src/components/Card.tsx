import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { PropsWithChildren } from "react";

/* type Card = {
  title: string;
  children: React.ReactNode;
}; */

/* type Card = PropsWithChildren<{
  title: string;
}>; */

type Card = {
  title: string;
};

// export default function Card({ title, children }: Card) {
export default function Card({ title, children }: PropsWithChildren<Card>) {
  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>{title}</Text>
      {children}
    </View>
  );
}

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
