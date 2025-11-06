import { View, Text, ScrollView, Image, Linking, TouchableOpacity, StyleSheet } from "react-native"
import { Linkedin, Instagram,Github, MessageCircle } from "lucide-react-native"
import * as FileSystem from "expo-file-system"
import { Asset } from "expo-asset"


export default function HomeScreen() {
  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/guilherme-hentges-1513a9264/", label: "LinkedIn" },
    { icon: Instagram, url: "https://instagram.com/guihentges", label: "Instagram" },
    { icon: Github, url: "https://github.com/guithentges", label: "GitHub" },
    { icon: MessageCircle, url: "https://wa.me/5581992587494", label: "WhatsApp" },
  ]

  const handleOpenCV = async () => {
    try {
      const asset = Asset.fromModule(require("../../assets/images/CurriculoGTH.pdf"))
      await asset.downloadAsync()

      await Linking.openURL(asset.localUri || "")
    } catch (error) {
      console.error("Erro ao abrir currículo:", error)
    }
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/images/Gui.png")} style={styles.profileImage} />
        </View>

        <Text style={styles.title}>Guilherme Tavares Hentges</Text>
        <Text style={styles.subtitle}>Desenvolvedor Full-Stack</Text>

        <Text style={styles.text}>
          Estudante de Ciência da Computação, apaixonado por tecnologia e inovação.
        </Text>

        <Text style={styles.textSmall}>
          Tenho habilidade em programação, comunicação, Web Design, Canva e Pacote Office que desenvolvi durante a minha
          trajetória acadêmica e profissional.
        </Text>

        <View style={styles.socialContainer}>
          {socialLinks.map((social, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => Linking.openURL(social.url)}
              style={styles.socialButton}
            >
              <social.icon size={24} color="#0f0f0f" />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.cvButton} onPress={handleOpenCV}>
          <Text style={styles.cvText}>Baixar Currículo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#0f172a", // slate-900
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: "#06b6d4", // cyan-500
    overflow: "hidden",
    marginBottom: 30,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  text: {
    color: "#d1d5db", // gray-300
    textAlign: "center",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
  textSmall: {
    color: "#9ca3af", // gray-400
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 32,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 32,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#06b6d4", // cyan-500
    alignItems: "center",
    justifyContent: "center",
  },
  cvButton: {
    borderWidth: 2,
    borderColor: "#06b6d4",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 20,
  },
  cvText: {
    color: "#06b6d4",
    fontWeight: "600",
    textAlign: "center",
  },
})
