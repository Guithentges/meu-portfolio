"use client"

import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { RotateCcw } from "lucide-react-native"

const WORDS = [
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "NATIVE",
  "EXPO",
  "DESENVOLVIMENTO",
  "PROGRAMACAO",
  "COMPUTADOR",
  "TECNOLOGIA",
  "APLICATIVO",
  "INTERFACE",
  "USUARIO",
  "SERVIDOR",
  "DATABASE",
  "FRAMEWORK",
  "BIBLIOTECA",
  "COMPONENTE",
  "FUNCAO",
  "VARIAVEL",
  "CONSTANTE",
]

const HANGMAN_STAGES = [
  `
    ------
    |    |
    |
    |
    |
    |
    --------
  `,
  `
    ------
    |    |
    |    O
    |
    |
    |
    --------
  `,
  `
    ------
    |    |
    |    O
    |    |
    |
    |
    --------
  `,
  `
    ------
    |    |
    |    O
    |   \\|
    |
    |
    --------
  `,
  `
    ------
    |    |
    |    O
    |   \\|/
    |
    |
    --------
  `,
  `
    ------
    |    |
    |    O
    |   \\|/
    |    |
    |
    --------
  `,
  `
    ------
    |    |
    |    O
    |   \\|/
    |    |
    |   / \\
    --------
  `,
]

export default function HangmanGame() {
  const [word, setWord] = useState("")
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [wrongGuesses, setWrongGuesses] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)

  useEffect(() => {
    resetGame()
  }, [])

  const resetGame = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)]
    setWord(randomWord)
    setGuessedLetters([])
    setWrongGuesses(0)
    setGameOver(false)
    setWon(false)
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || gameOver || won) return

    const newGuessedLetters = [...guessedLetters, letter]
    setGuessedLetters(newGuessedLetters)

    if (!word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1
      setWrongGuesses(newWrongGuesses)
      if (newWrongGuesses >= HANGMAN_STAGES.length - 1) {
        setGameOver(true)
      }
    }

    const allGuessed = word.split("").every((l) => newGuessedLetters.includes(l))
    if (allGuessed) setWon(true)
  }

  const displayWord = word
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ")

  const remainingGuesses = HANGMAN_STAGES.length - 1 - wrongGuesses

  return (
    <View style={styles.container}>
      <View style={styles.hangmanBox}>
        <Text style={styles.hangmanText}>{HANGMAN_STAGES[wrongGuesses]}</Text>
      </View>

      <View style={styles.statusBox}>
        <View style={styles.statusRow}>
          <Text style={styles.remainingText}>Tentativas restantes: {remainingGuesses}</Text>
          <Text style={styles.wrongText}>Erros: {wrongGuesses}/6</Text>
        </View>
      </View>

      <View style={styles.wordBox}>
        <Text style={styles.wordText}>{displayWord}</Text>
      </View>

      <View style={styles.usedLettersBox}>
        <Text style={styles.usedLettersLabel}>Letras usadas:</Text>
        <View style={styles.usedLettersContainer}>
          {guessedLetters.map((letter) => (
            <View
              key={letter}
              style={[
                styles.usedLetter,
                word.includes(letter) ? styles.correctLetter : styles.wrongLetter,
              ]}
            >
              <Text style={styles.usedLetterText}>{letter}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.keyboardBox}>
        <ScrollView scrollEnabled={false}>
          <View style={styles.keyboardRow}>
            {alphabet.map((letter) => {
              const isGuessed = guessedLetters.includes(letter)
              const isCorrect = word.includes(letter)

              return (
                <TouchableOpacity
                  key={letter}
                  onPress={() => handleGuess(letter)}
                  disabled={isGuessed || gameOver || won}
                  style={[
                    styles.keyButton,
                    isGuessed
                      ? isCorrect
                        ? styles.keyCorrect
                        : styles.keyWrong
                      : styles.keyDefault,
                    (isGuessed || gameOver || won) && styles.keyDisabled,
                  ]}
                >
                  <Text style={[styles.keyText, isGuessed ? styles.keyTextWhite : styles.keyTextDark]}>
                    {letter}
                  </Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>
      </View>

      {(gameOver || won) && (
        <View style={styles.resultBox}>
          {won ? (
            <>
              <Text style={styles.winTitle}>Parabéns!</Text>
              <Text style={styles.finalWord}>Você adivinhou a palavra: {word}</Text>
            </>
          ) : (
            <>
              <Text style={styles.loseTitle}>Game Over!</Text>
              <Text style={styles.finalWord}>A palavra era: {word}</Text>
            </>
          )}

          <TouchableOpacity onPress={resetGame} style={styles.resetButton}>
            <RotateCcw size={20} color="#0f0f0f" />
            <Text style={styles.resetButtonText}>Jogar Novamente</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e293b",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#06b6d4",
  },
  hangmanBox: {
    backgroundColor: "#0f172a",
    padding: 16,
    alignItems: "center",
  },
  hangmanText: {
    fontFamily: "monospace",
    color: "#d1d5db",
    fontSize: 10,
    lineHeight: 14,
  },
  statusBox: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#06b6d4",
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  remainingText: {
    color: "#06b6d4",
    fontWeight: "600",
  },
  wrongText: {
    color: "#d1d5db",
    fontSize: 14,
  },
  wordBox: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#06b6d4",
  },
  wordText: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: 8,
  },
  usedLettersBox: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#06b6d4",
  },
  usedLettersLabel: {
    color: "#94a3b8",
    fontSize: 12,
    marginBottom: 8,
  },
  usedLettersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  usedLetter: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  usedLetterText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 12,
  },
  correctLetter: {
    backgroundColor: "#16a34a",
  },
  wrongLetter: {
    backgroundColor: "#dc2626",
  },
  keyboardBox: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  keyboardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
  },
  keyButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  keyDefault: {
    backgroundColor: "#06b6d4",
  },
  keyCorrect: {
    backgroundColor: "#16a34a",
  },
  keyWrong: {
    backgroundColor: "#dc2626",
  },
  keyDisabled: {
    opacity: 0.5,
  },
  keyText: {
    fontWeight: "700",
  },
  keyTextWhite: {
    color: "#ffffff",
  },
  keyTextDark: {
    color: "#0f172a",
  },
  resultBox: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderTopWidth: 1,
    borderColor: "#06b6d4",
    alignItems: "center",
  },
  winTitle: {
    color: "#22c55e",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  },
  loseTitle: {
    color: "#ef4444",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  },
  finalWord: {
    color: "#ffffff",
    fontSize: 18,
    marginBottom: 16,
  },
  resetButton: {
    backgroundColor: "#06b6d4",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  resetButtonText: {
    color: "#0f172a",
    fontWeight: "700",
  },
})
