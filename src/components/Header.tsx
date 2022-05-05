import Language from './Language';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container h-16 flex items-center justify-center">
        <div className="flex-1 flex">
          <Language className="mr-10" />
          <div>SEARCH</div>
        </div>
        <div className="flex-1">
          <div>LOGO</div>
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