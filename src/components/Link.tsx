import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  className?: string;
  href?: string;
  to?: string;
  children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({
  className = '',
  children,
  to,
  ...props
}) => {
  if (to)
    return (
      <RouterLink
        className={`transition hover:text-blue-400 ${className}`}
        to={to}
        {...props}
      >
        {children}
      </RouterLink>
    );

  return (
    <a className={`transition hover:text-blue-400 ${className}`} {...props}>
      {children}
    </a>
  );
};

export default Link;
