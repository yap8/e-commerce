import CategoriesList from './CategoriesList';
import { Category } from './categories';

interface CategoriesProps {
  categories: Category[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <section className="bg-blue-50">
      <div className="container pt-10 pb-4">
        <CategoriesList categories={categories} />
      </div>
    </section>
  );
};

export default Categories;
