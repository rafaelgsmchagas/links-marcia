import profileAvatar from "@/assets/profile-avatar.jpg";

interface LinktreeHeaderProps {
  name?: string;
  description?: string;
  profileImage?: string;
}

const LinktreeHeader = ({ 
  name = "Seu Nome",
  description = "Descrição curta e elegante sobre você ou seu negócio", 
  profileImage = "/lovable-uploads/2044e468-ad9a-47d1-af06-3547cfe58fdf.png"
}: LinktreeHeaderProps) => {
  return (
    <header className="text-center mb-8 px-4">
      <div className="mb-6">
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-2 border-white/20"
          style={{ 
            boxShadow: '0 8px 32px 0 rgba(255,255,255,0.1)',
            transition: 'var(--transition-smooth)'
          }}
        />
      </div>
      
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
        {name}
      </h1>
      
      {description && (
        <p className="text-white/70 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
};

export default LinktreeHeader;