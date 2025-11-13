import { View, Text, ScrollView, TouchableOpacity, Linking, StyleSheet } from "react-native"
import { ExternalLink } from "lucide-react-native"

export default function ProjectsScreen() {
  const projects = [
    {
      title: "Jogo da Forca",
      description: "Jogo interativo desenvolvido com React e Tailwind CSS.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      link: "https://github.com",
    },
    {
      title: "Aura - Plataforma de Streaming",
      description: "Plataforma de streaming de conteúdo com autenticação e recomendações.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "https://github.com",
    },
    {
      title: "App de Tarefas",
      description: "Aplicativo mobile para gerenciamento de tarefas com sincronização em tempo real.",
      technologies: ["React Native", "Firebase", "Expo"],
      link: "https://github.com",
    },
    {
      title: "Dashboard Analítico",
      description: "Dashboard com gráficos e análises de dados em tempo real.",
      technologies: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
      link: "https://github.com",
    },
  ]

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meus Projetos</Text>

      {projects.map((project, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{project.title}</Text>

          <Text style={styles.description}>{project.description}</Text>

          <View style={styles.techContainer}>
            {project.technologies.map((tech, idx) => (
              <View key={idx} style={styles.techBadge}>
                <Text style={styles.techText}>{tech}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity
            onPress={() => Linking.openURL(project.link)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Ver Projeto</Text>
            <ExternalLink size={16} color="#0f0f0f" />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a", // slate-900
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#1e293b", // slate-800
    borderWidth: 1,
    borderColor: "#06b6d4", // cyan-500
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    color: "#22d3ee", // cyan-400
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    color: "#d1d5db", // gray-300
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  techBadge: {
    backgroundColor: "#334155", // slate-700
    borderRadius: 9999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  techText: {
    color: "#67e8f9", // cyan-300
    fontSize: 12,
    fontWeight: "600",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#06b6d4", // cyan-500
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: "#0f0f0f",
    fontWeight: "600",
  },
})
