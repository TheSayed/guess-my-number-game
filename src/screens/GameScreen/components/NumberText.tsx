import { View, Text, StyleSheet } from "react-native";
import React from "react";
import color from "../../../constants/colors";

type Props = {
  children: number;
};

const NumberText: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberText;

const styles = StyleSheet.create({
  numberContainer: {
    marginTop: 120,
    borderColor: color.secondary,
    borderWidth: 6,
    borderRadius: 8,
    width: "80%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: color.white,
    fontSize: 80,
    fontWeight: "bold",
  },
});
