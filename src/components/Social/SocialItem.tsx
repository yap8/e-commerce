import items from './items';

interface SocialItemProps {
  name: string;
}

const SocialItem: React.FC<SocialItemProps> = ({ name }) => {
  return (
    <li className="mr-4 last:m-0">
      <a
        className="block rounded-full bg-black p-2 group hover:bg-blue-400 transition"
        href={items.find((item) => item.name === name)?.link}
      >
        <div className="text-2xl text-white group-hover:text-white transition">
          {items.find((item) => item.name === name)?.Icon}
        </div>
      </a>
    </li>
  );
};

export default SocialItem;
