import Language from '../Language';
import { CartLink } from '../Cart';
import Search from '../Search';
import Logo from '../Logo';
import Link from '../Link';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container h-16 flex items-center justify-center">
        <div className="flex-1 flex">
          <Language className="mr-10" />
          <Search />
        </div>
        <div className="flex-1">
          <Logo className="text-center" />
        </div>
        <div className="flex-1">
          <nav>
            <ul className="flex items-center">
              <li className="ml-auto mr-10">
                <Link to="/register">REGISTER</Link>
              </li>
              <li className="mr-10">
                <Link to="/sign-in">SIGN IN</Link>
              </li>
              <li>
                <Link to="/cart">
                  <CartLink />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
