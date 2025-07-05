"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
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
  },
  {
    image: "/lovable-uploads/11c00701-ca0f-4fa3-bb97-72c2784342df.png",
    link: "https://palavracatolica.com.br/",
    alt: "Palavra Católica",
    title: "Visite o site Palavra Católica"
  },
  {
    image: "/lovable-uploads/e8be353d-b842-49c9-b357-ffad07769f55.png",
    link: "https://rhtrabalhista.com.br/",
    alt: "RH Trabalhista",
    title: "Visite o site RH Trabalhista"
  },
  {
    image: "/lovable-uploads/cbc8c522-2575-4ccc-88eb-eb68c83341bf.png",
    link: "https://simulatax.com.br/",
    alt: "Simulatax",
    title: "Visite o site Simulatax"
  },
  {
    image: "/lovable-uploads/e085ec84-2370-4302-ab1a-f162d4d45ab7.png",
    link: "https://consumidor.app/",
    alt: "Consumidor App",
    title: "Visite o site Consumidor App"
  },
  {
    image: "/lovable-uploads/dfad719a-f0c1-4929-87c8-77c737544ba1.png",
    link: "https://jusvalor.com.br/",
    alt: "Jusvalor",
    title: "Visite o site Jusvalor"
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
    <div className="min-h-screen bg-[#030303] relative overflow-hidden">
      {/* Background animado com formas geométricas */}
      <AnimatedBackground />
      
      <motion.div 
        className="container max-w-md mx-auto py-8 px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Cabeçalho com foto e descrição */}
        <motion.div variants={itemVariants}>
          <LinktreeHeader 
            name="Rafael Chagas"
            description="Advogado e Empreendedor"
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
    </div>
  );
};

export default Index;
