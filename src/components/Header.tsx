import Language from './Language';
import Search from './Search';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container h-16 flex items-center justify-center">
        <div className="flex-1 flex">
          <Language className="mr-10" />
          <Search />
        </div>
        <div className="flex-1">
          <Logo href="/" />
        </div>
        <div className="flex-1">
          <div>REGISTER</div>
          <div>SIGNIN</div>
          <div>CART</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
