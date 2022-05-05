import { useSwiper } from 'swiper/react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

interface NavButtonProps {
  prev?: boolean;
  next?: boolean;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ prev, next, className }) => {
  const swiper = useSwiper();

  return (
    <button
      className={`flex items-center text-2xl text-gray-400 justify-center absolute w-16 h-16 bg-gray-200/80 rounded-full backdrop-blur top-1/2 -translate-y-1/2 z-10 hover:text-gray-500 hover:bg-gray-300/80 transition ${
        next ? 'right-4' : 'left-4'
      } ${className}`}
      onClick={() => (next ? swiper.slideNext() : swiper.slidePrev())}
    >
      {next ? <AiFillCaretRight /> : <AiFillCaretLeft />}
    </button>
  );
};

export default NavButton;
