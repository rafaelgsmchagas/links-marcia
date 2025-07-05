"use client";

import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import LinktreeHeader from "@/components/LinktreeHeader";
import LinkButton from "@/components/LinkButton";
import SocialFooter from "@/components/SocialFooter";

// Importe suas imagens personalizadas
import linkButton1 from "@/assets/link-button-1.jpg";
import linkButton2 from "@/assets/link-button-2.jpg";
import linkButton3 from "@/assets/link-button-3.jpg";
import linkButton4 from "@/assets/link-button-4.jpg";

// Configuração dos links - Você pode facilmente modificar estes dados
const linkData = [
  {
    image: "/lovable-uploads/a63bc9af-1fa1-42c4-b6c8-359e515f2c79.png",
    link: "https://chagasmoroadvogados.com.br/",
    alt: "Chagas Moro Advogados",
    title: "Visite o site da Chagas Moro Advogados"
  }
];

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as any,
      },
    },
  };

  return (
    <WavyBackground 
      containerClassName="min-h-screen"
      backgroundFill="#030303"
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
      waveOpacity={0.3}
      blur={10}
      speed="slow"
    >
      <motion.div 
        className="container max-w-md mx-auto py-8 px-4 relative z-30"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Cabeçalho com foto e descrição */}
        <motion.div variants={itemVariants}>
          <LinktreeHeader 
            name="Márcia Moro Chagas"
            description="Advogada e Lançadora"
            profileImage="/lovable-uploads/727657bd-d840-4045-9d65-2aec1aea2df4.png"
          />
        </motion.div>

        {/* Lista de links com imagens clicáveis */}
        <motion.main className="space-y-4" variants={itemVariants}>
          {linkData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <LinkButton
                image={item.image}
                link={item.link}
                alt={item.alt}
                title={item.title}
              />
            </motion.div>
          ))}
        </motion.main>

        {/* Rodapé com redes sociais */}
        <motion.div variants={itemVariants}>
          <SocialFooter />
        </motion.div>
      </motion.div>
    </WavyBackground>
  );
};

export default Index;
