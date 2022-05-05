import { AiOutlineSearch } from 'react-icons/ai';

interface SearchProps {
  className?: string;
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({
  className = '',
  placeholder = 'Search',
}) => {
  return (
    <form className={`flex items-center relative ${className}`}>
      <input
        className="px-3 py-2 border border-gray-400 placeholder:text-gray-400"
        type="text"
        placeholder={placeholder}
      />
      <button className="absolute right-2">
        <AiOutlineSearch className="text-gray-400 text-xl" />
      </button>
    </form>
  );
};

export default Search;
