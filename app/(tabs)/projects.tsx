import { View, Text, ScrollView, TouchableOpacity, Linking, StyleSheet } from "react-native"
import { ExternalLink } from "lucide-react-native"

export default function ProjectsScreen() {
  const projects = [
    {
      title: "Aura - Loja virtual de roupas",
      description: "Plataforma de e-commerce para venda de roupas com sistema de pagamento integrado.",
      technologies: ["Python", "Django", "HTML", "CSS", "SQLite"],
      link: "https://github.com/Guithentges/Aura",
    },
    {
      title: "Lista de Compras",
      description: "Site online para gerenciar listas de compras.",
      technologies: ["Javascript", "HTML", "CSS"],
      link: "https://github.com/Guithentges/Lista-de-compras",
    },
    {
      title: "Restaurante DGK",
      description: "Sistema de gerenciamento para restaurante interativo.",
      technologies: ["Next.js", "TypeScript", "Javascript", "CSS", "HTML", "Back4app"],
      link: "https://github.com/Guithentges/dgkrestaurante",
    },
    {
      title: "Sorteador de numeros",
      description: "Site responsivo para sortear números aleatórios dentro de um intervalo definido pelo usuário.",
      technologies: ["Javascript", "HTML", "CSS"],
      link: "https://github.com/Guithentges/sorteador",
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
