import Link from './Link';

interface LogoProps {
  className?: string;
  href?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '', href = '/' }) => {
  return (
    <h1 className={`text-4xl font-bold ${className}`}>
      <Link className="hover:text-black" to={href}>
        NAME.
      </Link>
    </h1>
  );
};

export default Logo;
