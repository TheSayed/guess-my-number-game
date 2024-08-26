import { View, Text, StyleSheet } from "react-native";
import React from "react";
import color from "../../../constants/colors";

type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.titleContainer} testID="title-container">
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    borderWidth: 4,
    borderColor: color.white,
    borderRadius: 8,
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: color.white,
    fontSize: 25,
    fontWeight: "bold",
  },
});
