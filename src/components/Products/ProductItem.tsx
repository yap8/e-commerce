import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';

import { Product } from './products';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <li className="w-80 h-96 flex items-center justify-center bg-white mb-6 shadow group overflow-hidden relative">
      <div
        className="w-64 h-72 bg-contain bg-no-repeat bg-center group-hover:scale-105 transition"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <a
        className="absolute w-full h-full bg-gray-900 transition opacity-0 group-hover:opacity-60 text-transparent"
        href={`/products/${product.id}`}
      >
        {product.title}
      </a>
      <ul className="absolute flex opacity-0 group-hover:opacity-100 transition">
        <li className="mr-4">
          <a
            className="flex items-center justify-center h-12 w-12 p-1 rounded-full bg-white hover:scale-110 transition"
            href={`/products/${product.id}`}
          >
            <AiOutlineShoppingCart className="w-7 h-7" />
          </a>
        </li>
        <li className="mr-4">
          <a
            className="flex items-center justify-center h-12 w-12 p-1 rounded-full bg-white hover:scale-110 transition"
            href={`/products/${product.id}`}
          >
            <AiOutlineSearch className="w-7 h-7" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center justify-center h-12 w-12 p-1 rounded-full bg-white hover:scale-110 transition"
            href={`/products/${product.id}`}
          >
            <FaRegHeart className="w-6 h-6" />
          </a>
        </li>
      </ul>
    </li>
  );
};

export default ProductItem;
