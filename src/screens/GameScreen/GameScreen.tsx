import {
  View,
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import NumberText from "./components/NumberText";
import Title from "./components/Title";
import PrimaryButton from "../../components/PrimaryButton";
import color from "../../constants/colors";

type GameScreenProps = {
  userNumber: number;
  onGameOver: () => void;
  onGuessRound: (rounds: number) => void;
};

const GameScreen: React.FC<GameScreenProps> = ({
  userNumber,
  onGameOver,
  onGuessRound,
}) => {
  const generateRandomNumber = (
    min: number,
    max: number,
    exclude: number
  ): number => {
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    return rndNum === exclude
      ? generateRandomNumber(min, max, exclude)
      : rndNum;
  };

  const [minBoundary, setMinBoundary] = useState(1);
  const [maxBoundary, setMaxBoundary] = useState(99);
  const initialGuess = generateRandomNumber(1, 99, userNumber);
  const [opponentGuess, setOpponentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState(0);

  useEffect(() => {
    setMinBoundary(1);
    setMaxBoundary(99);
  }, [userNumber]);

  const nextGuessHandler = (direction: string) => {
    let newMinBoundary = minBoundary;
    let newMaxBoundary = maxBoundary;

    if (
      (direction === "lower" && opponentGuess < userNumber) ||
      (direction === "higher" && opponentGuess > userNumber)
    ) {
      Alert.alert(
        "Don't Lie Please!",
        "I may lose in guessing the number, but I can always detect liars."
      );
      return;
    }

    if (direction === "lower") {
      newMaxBoundary = opponentGuess;
      setMaxBoundary(opponentGuess); // Update state
    } else if (direction === "higher") {
      newMinBoundary = opponentGuess + 1;
      setMinBoundary(opponentGuess + 1); // Update state
    }

    const newGuess = generateRandomNumber(
      newMinBoundary,
      newMaxBoundary,
      opponentGuess
    );
    setOpponentGuess(newGuess);
    setGuessRounds((prevRounds) => {
      const updatedRounds = prevRounds + 1;
      onGuessRound(updatedRounds);
      return updatedRounds;
    });
  };

  useEffect(() => {
    if (opponentGuess === userNumber) {
      onGameOver();
      console.log("Game Over");
    }
  }, [opponentGuess, userNumber, onGameOver]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Title title="Opponent Guess" />
          <NumberText>{opponentGuess}</NumberText>
          <View>
            <Text style={styles.checkTitle}>Higher or Lower</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.buttons}>
                <PrimaryButton onPress={() => nextGuessHandler("higher")}>
                  Higher
                </PrimaryButton>
              </View>
              <View style={styles.buttons}>
                <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                  Lower
                </PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default React.memo(GameScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    width: "100%",
  },
  checkTitle: {
    color: color.white,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 120,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    width: "80%",
  },
  buttons: {
    padding: 8,
    backgroundColor: color.secondary,
    width: 120,
    alignItems: "center",
    borderRadius: 15,
    shadowColor: color.buttonPrimary,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
});
