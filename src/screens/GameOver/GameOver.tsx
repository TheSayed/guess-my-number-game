import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Title from "../GameScreen/components/Title";
import images from "../../../assets/Images";
import color from "../../constants/colors";

const GameOver = ({ userNumber, onStartNewRounds, rounds }) => {
  return (
    <View style={styles.subContainer}>
      <Title title="Game Over!" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={images.gameOver}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.congratulations}>Congratulations </Text>
        <Text style={styles.text}>
          Your Mobile Needs <Text style={styles.numbers}>{rounds}</Text> Round
          to Guess The Number <Text style={styles.numbers}>{userNumber}</Text>
        </Text>
        <TouchableOpacity
          onPress={onStartNewRounds}
          style={styles.startNewRound}
        >
          <Text style={styles.startNewRoundText}>Start New Round</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  subContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 400,
    height: 400,
    borderColor: color.white,
    borderWidth: 2,
    borderRadius: 200,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  congratulations: {
    color: color.white,
    textAlign: "center",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  textContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: color.primary,
    textAlign: "center",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  numbers: {
    color: color.white,
  },
  startNewRound: {
    height: 40,
    backgroundColor: color.secondary,
    marginTop: 40,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  startNewRoundText: {
    color: color.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
