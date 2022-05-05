import Language from './Language';
import Search from './Search';
import Logo from './Logo';
import Link from './Link';

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
          <nav>
            <ul className="flex">
              <li className="ml-auto mr-4">
                <Link href="/register">REGISTER</Link>
              </li>
              <li className="mr-4">
                <Link href="/sign-in">SIGN IN</Link>
              </li>
              <li>
                <div>CARD</div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
