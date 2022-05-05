import Newsletter from '../../components/Newsletter';
import { ProductsList } from '../../components/Products';
import products from '../../components/Products/products';

const Home = () => {
  return (
    <main>
      <Newsletter />
      <ProductsList products={products} />
    </main>
  );
};

export default Home;
