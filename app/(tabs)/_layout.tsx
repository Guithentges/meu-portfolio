import { Tabs } from "expo-router"
import { Home, User, Briefcase, Code, Gamepad2, FolderOpen } from "lucide-react-native"
import { useColorScheme } from "react-native"

export default function TabsLayout() {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === "dark"

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
          headerTitle: "Guilherme Hentges",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
          headerTitle: "Sobre Mim",
        }}
      />
      <Tabs.Screen
        name="academic"
        options={{
          title: "Acadêmico",
          tabBarIcon: ({ color }) => <Code size={24} color={color} />,
          headerTitle: "Experiência Acadêmica",
        }}
      />
      <Tabs.Screen
        name="professional"
        options={{
          title: "Profissional",
          tabBarIcon: ({ color }) => <Briefcase size={24} color={color} />,
          headerTitle: "Experiência Profissional",
        }}
      />
    </Tabs>
  )
}
