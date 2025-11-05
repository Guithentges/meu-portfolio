"use client"

import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
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

  // Initialize game
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

    // Check if won
    const wordLetters = word.split("")
    const allGuessed = wordLetters.every((letter) => newGuessedLetters.includes(letter))
    if (allGuessed) {
      setWon(true)
    }
  }

  const displayWord = word
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ")

  const remainingGuesses = HANGMAN_STAGES.length - 1 - wrongGuesses

  return (
    <View className="bg-slate-800 rounded-lg overflow-hidden border border-cyan-500">
      {/* Hangman Drawing */}
      <View className="bg-slate-900 p-4 items-center">
        <Text className="font-mono text-gray-300 text-xs leading-tight">{HANGMAN_STAGES[wrongGuesses]}</Text>
      </View>

      {/* Game Info */}
      <View className="bg-slate-800 px-4 py-4 border-b border-cyan-500">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-cyan-400 font-semibold">Tentativas restantes: {remainingGuesses}</Text>
          <Text className="text-gray-300 text-sm">Erros: {wrongGuesses}/6</Text>
        </View>
      </View>

      {/* Word Display */}
      <View className="bg-slate-800 px-4 py-6 items-center border-b border-cyan-500">
        <Text className="text-white text-4xl font-bold tracking-widest">{displayWord}</Text>
      </View>

      {/* Guessed Letters */}
      <View className="bg-slate-800 px-4 py-4 border-b border-cyan-500">
        <Text className="text-gray-400 text-xs mb-2">Letras usadas:</Text>
        <View className="flex-row flex-wrap gap-2">
          {guessedLetters.map((letter) => (
            <View key={letter} className={`px-2 py-1 rounded ${word.includes(letter) ? "bg-green-600" : "bg-red-600"}`}>
              <Text className="text-white font-semibold text-xs">{letter}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Alphabet Buttons */}
      <View className="bg-slate-800 px-4 py-4">
        <ScrollView scrollEnabled={false}>
          <View className="flex-row flex-wrap gap-2 justify-center">
            {alphabet.map((letter) => {
              const isGuessed = guessedLetters.includes(letter)
              const isCorrect = word.includes(letter)

              return (
                <TouchableOpacity
                  key={letter}
                  onPress={() => handleGuess(letter)}
                  disabled={isGuessed || gameOver || won}
                  className={`w-10 h-10 rounded items-center justify-center ${
                    isGuessed ? (isCorrect ? "bg-green-600" : "bg-red-600") : "bg-cyan-500"
                  } ${(isGuessed || gameOver || won) && "opacity-50"}`}
                >
                  <Text className={`font-bold ${isGuessed ? "text-white" : "text-slate-900"}`}>{letter}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>
      </View>

      {/* Game Over / Won Screen */}
      {(gameOver || won) && (
        <View className="bg-slate-800 px-4 py-6 border-t border-cyan-500 items-center">
          {won ? (
            <>
              <Text className="text-green-400 text-2xl font-bold mb-2">Parabéns! 🎉</Text>
              <Text className="text-white text-lg mb-4">Você adivinhou a palavra: {word}</Text>
            </>
          ) : (
            <>
              <Text className="text-red-400 text-2xl font-bold mb-2">Game Over! 💀</Text>
              <Text className="text-white text-lg mb-4">A palavra era: {word}</Text>
            </>
          )}

          <TouchableOpacity
            onPress={resetGame}
            className="bg-cyan-500 rounded-lg px-6 py-3 flex-row items-center gap-2"
          >
            <RotateCcw size={20} color="#0f0f0f" />
            <Text className="text-slate-900 font-bold">Jogar Novamente</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
