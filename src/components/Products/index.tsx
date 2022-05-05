import ProductsList from './ProductsList';
import ProductItem from './ProductItem';
import { Product } from './products';

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <section>
      <div className="container pt-10 pb-4">
        <ProductsList products={products} />
      </div>
    </section>
  );
};

export { ProductItem, ProductsList };
export default Products;
