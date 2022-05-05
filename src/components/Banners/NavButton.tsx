import { useSwiper } from 'swiper/react';

interface NavButtonProps {
  prev?: boolean;
  next?: boolean;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ prev, next, className }) => {
  const swiper = useSwiper();

  return (
    <button
      className={`w-20 h-20 bg-white/80 rounded-full backdrop-blur ${className}`}
      onClick={() => (next ? swiper.slideNext() : swiper.slidePrev())}
    >
      {next ? '>' : '<'}
    </button>
  );
};

export default NavButton;
