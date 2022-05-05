import SocialItem from './SocialItem';

interface SocialListProps {
  items: Array<string>;
}

const SocialList: React.FC<SocialListProps> = ({ items }) => {
  return (
    <ul className="flex">
      {items.map((item) => (
        <SocialItem key={item} name={item} />
      ))}
    </ul>
  );
};

export default SocialList;
