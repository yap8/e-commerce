import { Product } from './products';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <li className="w-full">
      <a href={`/products/${product.id}`}>{product.title}</a>
    </li>
  );
};

export default ProductItem;
