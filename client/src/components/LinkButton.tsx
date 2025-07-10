import { StarBorder } from "@/components/ui/star-border";

interface LinkButtonProps {
  image: string;
  link: string;
  alt: string;
  title?: string;
}

const LinkButton = ({ image, link, alt, title }: LinkButtonProps) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <StarBorder
      onClick={handleClick}
      className="w-full focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
      color="rgba(255, 255, 255, 0.6)"
      speed="8s"
      title={title}
    >
      <div className="flex items-center justify-center p-1 rounded-[16px] overflow-hidden bg-black/20">
        <img
          src={image}
          alt={alt}
          className="w-full h-14 md:h-16 object-cover transition-all duration-300 hover:scale-105 rounded-[12px]"
        />
      </div>
    </StarBorder>
  );
};

export default LinkButton;