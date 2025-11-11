import { View, Text, ScrollView, StyleSheet } from "react-native"

export default function AboutScreen() {
  const technologies = [
    { name: "React Native", category: "Framework" },
    { name: "Expo", category: "Framework" },
    { name: "TypeScript", category: "Linguagem" },
    { name: "JavaScript", category: "Linguagem" },
    { name: "React", category: "Framework" },
    { name: "Next.js", category: "Framework" },
    { name: "Node.js", category: "Runtime" },
    { name: "HTML", category: "Markup" },
    { name: "CSS", category: "Styling" },
    { name: "Git", category: "Versionamento" },
    { name: "Expo Router", category: "Navegação" },
    { name: "Lucide Icons", category: "UI" },
  ]

  const categories = Array.from(new Set(technologies.map((t) => t.category)))

  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.title}>Sobre Este App</Text>

      <Text style={styles.text}>
        Este aplicativo foi desenvolvido com React Native e Expo, utilizando as tecnologias mais modernas para criar uma
        experiência mobile fluida e responsiva.
      </Text>

      <Text style={styles.sectionTitle}>Tecnologias Utilizadas</Text>

      {categories.map((category) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <View style={styles.techContainer}>
            {technologies
              .filter((t) => t.category === category)
              .map((tech, index) => (
                <View key={index} style={styles.techItem}>
                  <Text style={styles.techText}>{tech.name}</Text>
                </View>
              ))}
          </View>
        </View>
      ))}

      <View style={styles.featuresBox}>
        <Text style={styles.featuresTitle}>Recursos do App</Text>
        <Text style={styles.featuresText}>
          • Navegação com Expo Router{"\n"}• Interface responsiva{"\n"}• Temas escuros{"\n"}• Ícones com Lucide{"\n"}•
          Jogo integrado{"\n"}• Múltiplas telas de conteúdo
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    color: "#d1d5db",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#06b6d4",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  categoryContainer: {
    marginBottom: 24,
  },
  categoryTitle: {
    color: "#22d3ee",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  techItem: {
    backgroundColor: "#1e293b",
    borderColor: "#06b6d4",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 8,
  },
  techText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  featuresBox: {
    backgroundColor: "#1e293b",
    borderColor: "#06b6d4",
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  featuresTitle: {
    color: "#22d3ee",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  featuresText: {
    color: "#d1d5db",
    fontSize: 14,
    lineHeight: 20,
  },
})
