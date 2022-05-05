interface LinkProps {
  className?: string;
  href: string;
  children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ className = '', href, children }) => {
  return (
    <a className={`transition hover:text-blue-400 ${className}`} href={href}>
      {children}
    </a>
  );
};

export default Link;
