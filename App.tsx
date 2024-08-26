import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import StartGame from "./src/screens/StartGame/StartGame";
import images from "./assets/Images";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen/GameScreen";
import color from "./src/constants/colors";
import GameOver from "./src/screens/GameOver/GameOver";

export default function App() {
  const [PickedNumber, setPickedNumber] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  const pickedNumberHandler = (PickedNumber: number) => {
    setPickedNumber(PickedNumber);
    setGameIsOver(false);
  };

  const onGameOverHandler = () => {
    setGameIsOver(true);
    console.log("app.tsx game is over");
  };

  const onStartNewRoundsHandler = () => {
    setPickedNumber(0);
    setGameIsOver(false);
  };

  const onGuessRoundsHandler = (guessRounds: number) => {
    setRounds(guessRounds);
  };

  let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  if (PickedNumber) {
    screen = (
      <GameScreen
        userNumber={PickedNumber}
        onGameOver={onGameOverHandler}
        onGuessRound={onGuessRoundsHandler}
      />
    );
  }

  if (gameIsOver && PickedNumber) {
    screen = (
      <GameOver
        userNumber={PickedNumber}
        onStartNewRounds={onStartNewRoundsHandler}
        rounds={rounds}
      />
    );
  }

  console.log("rounds: " + rounds);
  return (
    <View style={styles.container}>
      <ImageBackground source={images.dice} style={styles.backgroundImage}>
        <LinearGradient
          colors={[color.primary, color.secondary]}
          style={styles.gradient}
        />
        <View style={styles.content}>
          {screen}
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.4,
  },
  content: {
    zIndex: 1,
  },
});
