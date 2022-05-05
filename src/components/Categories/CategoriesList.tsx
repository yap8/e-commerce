import CategoryItem from './CategoryItem';
import { Category } from './categories';

interface CategoriesListProps {
  categories: Category[];
}

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
  return (
    <ul className="flex justify-between flex-wrap">
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </ul>
  );
};

export default CategoriesList;
