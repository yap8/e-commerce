import { Category } from './categories';

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <li className="mb-6 shadow group">
      <a
        className={`w-80 h-80 flex flex-col items-center justify-center transition text-transparent ${category.color} ${category.colorHover}`}
        href={`/products/${category.alias}`}
      >
        <h2 className="text-3xl uppercase text-white drop-shadow mb-4">
          {category.text}
        </h2>
      </a>
    </li>
  );
};

export default CategoryItem;
