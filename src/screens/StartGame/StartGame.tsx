import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import color from "../../constants/colors";

type Props = {
  onPickNumber: (value: number) => void;
};

const StartGame: React.FC<Props> = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const inputNumberHandler = (enteredNumber: string) => {
    setEnteredNumber(enteredNumber);
  };

  const resetHandler = () => {
    setEnteredNumber("");
  };

  const confirmNumberHandler = () => {
    const confirmNumber = parseInt(enteredNumber);
    if (isNaN(confirmNumber) || confirmNumber <= 0 || confirmNumber > 99) {
      return Alert.alert(
        "invalid number",
        "The input must be a number between 0 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetHandler,
          },
        ]
      );
    } else {
      onPickNumber(confirmNumber);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>Enter A Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={2}
        onChangeText={inputNumberHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmNumberHandler}>Confirm</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: color.primary,
    borderRadius: 10,
    elevation: 8,
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 2,
    borderBlockColor: color.secondary,
    width: 50,
    height: 50,
    fontSize: 32,
    fontWeight: "bold",
    color: color.secondary,
    textAlign: "center",
    marginVertical: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginBottom: 18,
  },
  button: {
    padding: 8,
    backgroundColor: color.buttonPrimary,
    width: "30%",
    alignItems: "center",
    borderRadius: 15,
    shadowColor: color.buttonPrimary,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
  text: {
    color: color.secondary,
    fontWeight: "bold",
    fontSize: 24,
  },
});
