interface LogoProps {
  className?: string;
  href?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '', href = '/' }) => {
  return (
    <h1 className={`text-4xl font-semibold ${className}`}>
      <a href={href}>NAME.</a>
    </h1>
  );
};

export default Logo;
