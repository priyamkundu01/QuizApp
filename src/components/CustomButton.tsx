import {
  View,
  Text,
  Pressable,
  StyleSheet,
  PressableProps,
} from "react-native";
import React, { ComponentProps } from "react";

/* type CustomButton = {
  title: string;
  rightIcon?: React.ReactNode;
  onPress: () => void;
}; */

/* type CustomButton = {
  title: string;
  rightIcon?: React.ReactNode;
} & PressableProps; */
type CustomButton = {
  title: string;
  rightIcon?: React.ReactNode;
} & ComponentProps<typeof Pressable>;

// export default function CustomButton({ title, rightIcon, onPress}: CustomButton) {
// export default function CustomButton({ title, rightIcon, ...pressableProps}: CustomButton) {
export default function CustomButton({
  title,
  rightIcon,
  ...ComponentProps
}: CustomButton) {
  return (
    // <Pressable {...pressableProps} style={styles.button}>
    <Pressable {...ComponentProps} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
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
  rightIcon: {
    position: "absolute",
    right: 20,
  },
});
