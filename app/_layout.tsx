import { Stack } from "expo-router"
import { useColorScheme } from "react-native"

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#0f0f0f",
        },
        headerTintColor: "#0ea5e9",
        headerTitleStyle: {
          fontWeight: "600",
          color: "#ffffff",
        },
        contentStyle: {
          backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#0f0f0f",
        },
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}
