import { View, Text, ScrollView, StyleSheet } from "react-native";
import HangmanGame from "@/components/HangmanGame";

export default function GameScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Jogo da Forca</Text>
        <Text style={styles.description}>
          Adivinhe a palavra antes de cometer 6 erros! Clique nas letras para fazer suas tentativas.
        </Text>
      </View>

      <View style={styles.gameContainer}>
        <HangmanGame />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a", 
    color: "#ffffff",
  },

  header: {
    paddingHorizontal: 24, 
    paddingVertical: 24,   
  },

  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16, 
  },

  description: {
    color: "#d1d5db", 
    fontSize: 14,    
    lineHeight: 20,   
    marginBottom: 24, 
  },

  gameContainer: {
    paddingHorizontal: 24, 
    paddingBottom: 24,     
    color: "#ffffff",
  },
});
