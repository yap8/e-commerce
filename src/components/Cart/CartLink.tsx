import { AiOutlineShoppingCart } from 'react-icons/ai';

const cartItemsCount: number = 3;

const CartLink: React.FC = () => {
  return (
    <div className="flex relative">
      <div className="flex font-semibold items-center justify-center h-6 w-6 bg-violet-600 text-white rounded-full absolute -top-2 -right-2">
        {cartItemsCount}
      </div>
      <AiOutlineShoppingCart className="text-3xl transition hover:text-violet-600" />
    </div>
  );
};

export default CartLink;
