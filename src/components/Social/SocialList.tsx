import SocialItem from './SocialItem';

interface SocialListProps {
  className?: string;
  items: Array<string>;
}

const SocialList: React.FC<SocialListProps> = ({ className = '', items }) => {
  return (
    <ul className={`flex ${className}`}>
      {items.map((item) => (
        <SocialItem key={item} name={item} />
      ))}
    </ul>
  );
};

export default SocialList;
