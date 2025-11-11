import { View, Text, ScrollView, StyleSheet } from "react-native"

export default function ProfessionalScreen() {
  const professionalExperience = [
    {
      title: "Estagiário de Sistemas de Aplicativos",
      company: "Secretaria de Assistência Social - PE",
      period: "02/2025 - Atualmente",
      description: "Suporte no desenvolvimento de sites e aplicações web com HTML, CSS, JavaScript, Vue.js, Python Django e WordPress.",
      responsibilities: [
        "Manutenção de sites existentes",
        "Implementação de novas funcionalidades",
        "Testes de qualidade",
        "Aprendizado contínuo de novas tecnologias",
      ],
    },
    {
      title: "Consultor de Vendas",
      company: "Eixo Consultoria (Empresa Júnior de Engenharia)",
      period: "01/2022 - 06/2022",
      description: "Consultoria de vendas e atendimento ao cliente no setor de engenharia.",
      responsibilities: [
        "Prospecção de clientes",
        "Elaboração de propostas comerciais",
        "Atendimento personalizado",
        "Elaboração de postagens para redes sociais",
      ],
    },
  ]

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>

      {professionalExperience.map((exp, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{exp.title}</Text>
          <Text style={styles.company}>{exp.company}</Text>
          <Text style={styles.period}>{exp.period}</Text>

          <Text style={styles.description}>{exp.description}</Text>

          <Text style={styles.respTitle}>Responsabilidades:</Text>
          {exp.responsibilities.map((resp, idx) => (
            <Text key={idx} style={styles.respItem}>
              • {resp}
            </Text>
          ))}
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
  company: {
    color: "#9ca3af",
    fontSize: 14,
    marginBottom: 2,
  },
  period: {
    color: "#6b7280",
    fontSize: 12,
    marginBottom: 12,
  },
  description: {
    color: "#d1d5db",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  respTitle: {
    color: "#67e8f9",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 6,
  },
  respItem: {
    color: "#9ca3af",
    fontSize: 12,
    marginBottom: 4,
  },
})
