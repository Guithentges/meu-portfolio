import { View, Text, ScrollView, StyleSheet } from "react-native"

export default function AcademicScreen() {
  const academicExperience = [
    {
      title: "Ciência da Computação",
      institution: "Universidade Católica de Pernambuco",
      period: "2022 - Presente",
      description:
        "Estudante de Ciência da Computação com foco em desenvolvimento de software e tecnologias web.",
      highlights: ["Programação", "Estruturas de Dados", "Banco de Dados", "Engenharia de Software"],
    },
    {
      title: "Certificado de Inglês Avançado",
      institution: "Newbold College - ING",
      period: "2017",
      description: "Certificação em Inglês Avançado com ênfase em comunicação e compreensão.",
      highlights: ["Inglês Avançado", "Comunicação Eficaz"],
    },
    {
      title: "Certificado de Desenvolvedor Web Full Stack",
      institution: "Rocketseat",
      period: "2025",
      description: "Curso de desenvolvimento web full stack com foco em tecnologias modernas.",
      highlights: ["JavaScript", "React", "Node.js", "Banco de Dados", "APIs REST", "Docker", "HTML", "CSS", "TypeScript", "Git" , "GitHub"],
    },
  ]

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Formação Acadêmica</Text>

      <Text style={styles.description}>
        Aqui estão algumas das principais formações e experiências acadêmicas que contribuíram para meu
        desenvolvimento como desenvolvedor.
      </Text>

      {academicExperience.map((exp, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{exp.title}</Text>
          <Text style={styles.institution}>{exp.institution}</Text>
          <Text style={styles.period}>{exp.period}</Text>

          <Text style={styles.cardDescription}>{exp.description}</Text>

          <View style={styles.highlightContainer}>
            {exp.highlights.map((highlight, idx) => (
              <View key={idx} style={styles.highlightBadge}>
                <Text style={styles.highlightText}>{highlight}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
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
  description: {
    color: "#d1d5db", 
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#1e293b", 
    borderWidth: 1,
    borderColor: "#06b6d4", 
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  cardTitle: {
    color: "#22d3ee", 
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  institution: {
    color: "#9ca3af", 
    fontSize: 14,
    marginBottom: 2,
  },
  period: {
    color: "#6b7280", 
    fontSize: 12,
    marginBottom: 12,
  },
  cardDescription: {
    color: "#d1d5db",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  highlightContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  highlightBadge: {
    backgroundColor: "#334155", 
    borderWidth: 1,
    borderColor: "#06b6d4", 
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  highlightText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
})
