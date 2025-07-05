import { Instagram, Linkedin, Facebook } from "lucide-react";

interface SocialLink {
  icon: React.ComponentType<any>;
  url: string;
  label: string;
}

interface SocialFooterProps {
  socialLinks?: SocialLink[];
}

const defaultSocialLinks: SocialLink[] = [
  {
    icon: Instagram,
    url: "https://www.instagram.com/marciamoroadvogada/",
    label: "Instagram"
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/company/chagas-moro-advogados/",
    label: "LinkedIn"
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/chagasmoro",
    label: "Facebook"
  }
];

const SocialFooter = ({ socialLinks = defaultSocialLinks }: SocialFooterProps) => {
  return (
    <footer className="mt-12 pt-8 border-t border-white/10">
      <div className="flex justify-center gap-6">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-300 group backdrop-blur-sm"
              style={{ transition: 'var(--transition-smooth)' }}
              aria-label={social.label}
            >
              <IconComponent 
                size={20} 
                className="text-white/60 group-hover:text-white transition-colors duration-300" 
                style={{ transition: 'var(--transition-smooth)' }}
              />
            </a>
          );
        })}
      </div>
      
      <div className="text-center mt-6">
        <p className="text-xs text-white/40">
          © 2024 - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default SocialFooter;