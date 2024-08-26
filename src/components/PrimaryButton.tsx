import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import color from "../constants/colors";

type Props = {
  children: string;
  onPress: () => void;
};
const PrimaryButton: React.FC<Props> = ({ children, onPress }) => {
  return (
    <TouchableOpacity hitSlop={12} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  text: {
    color: color.white,
  },
});
