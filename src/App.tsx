import Announcement from './components/Announcement';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Announcement />
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
