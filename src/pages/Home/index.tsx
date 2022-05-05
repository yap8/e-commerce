import categories from '../../components/Categories/categories';
import products from '../../components/Products/products';
import Newsletter from '../../components/Newsletter';
import Categories from '../../components/Categories';
import Products from '../../components/Products';
import Banners from '../../components/Banners';

const Home = () => {
  return (
    <main>
      <Banners />
      <Categories categories={categories} />
      <Products products={products.slice(0, 8)} />
      <Newsletter />
    </main>
  );
};

export default Home;
