import profileAvatar from "@/assets/profile-avatar.jpg";

interface LinktreeHeaderProps {
  name?: string;
  description?: string;
  profileImage?: string;
}

const LinktreeHeader = ({ 
  name = "Seu Nome",
  description = "Descrição curta e elegante sobre você ou seu negócio", 
  profileImage = profileAvatar
}: LinktreeHeaderProps) => {
  return (
    <header className="text-center mb-8 px-4 relative z-20">
      {/* Backdrop blur container */}
      <div className="backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-white/10">
        <div className="mb-6">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-white/30 shadow-2xl"
            style={{ 
              boxShadow: '0 8px 32px 0 rgba(255,255,255,0.2), 0 0 0 1px rgba(255,255,255,0.1)',
              transition: 'var(--transition-smooth)'
            }}
          />
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
          {name}
        </h1>
        
        {description && (
          <p className="text-white/90 text-sm md:text-base max-w-md mx-auto leading-relaxed drop-shadow-md">
            {description}
          </p>
        )}
      </div>
    </header>
  );
};

export default LinktreeHeader;