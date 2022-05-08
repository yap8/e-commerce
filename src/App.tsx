import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Announcement from './components/Announcement';
import Products, { Product } from './pages/Products';
import Categories from './pages/Categories';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App: React.FC = () => {
  return (
    <Router>
      <Announcement />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="cart">
          <Route index element={<Cart />} />
        </Route>
        <Route path="products">
          <Route path=":product" element={<Product />} />
          <Route index element={<Products />} />
        </Route>
        <Route path="categories">
          <Route index element={<Categories />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
