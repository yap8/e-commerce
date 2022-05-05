import Newsletter from '../../components/Newsletter';
import Products from '../../components/Products';
import products from '../../components/Products/products';

const Home = () => {
  return (
    <main>
      <Products products={products.slice(0, 8)} />
      <Newsletter />
    </main>
  );
};

export default Home;
