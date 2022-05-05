export interface Category {
  alias: string;
  text: string;
  color: string;
  colorHover: string;
}

const categories: Category[] = [
  {
    alias: 'electronics',
    text: 'electronics',
    color: 'bg-blue-300',
    colorHover: 'hover:bg-blue-400',
  },
  {
    alias: 'jewelery',
    text: 'jewelery',
    color: 'bg-red-300',
    colorHover: 'hover:bg-red-400',
  },
  {
    alias: 'men',
    text: "men's clothing",
    color: 'bg-green-300',
    colorHover: 'hover:bg-green-400',
  },
  {
    alias: 'women',
    text: "women's clothing",
    color: 'bg-yellow-300',
    colorHover: 'hover:bg-yellow-400',
  },
];

export default categories;
