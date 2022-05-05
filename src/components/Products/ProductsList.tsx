import ProductItem from './ProductItem';
import { Product } from './products';

interface ProductsListProps {
  className?: string;
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({
  className = '',
  products,
}) => {
  return (
    <ul className={`flex flex-wrap justify-between ${className}`}>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
