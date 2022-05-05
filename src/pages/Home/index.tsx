import Newsletter from '../../components/Newsletter';
import Products from '../../components/Products';
import products from '../../components/Products/products';

const Home = () => {
  return (
    <main>
      <Newsletter />
      <Products products={products} />
    </main>
  );
};

export default Home;
