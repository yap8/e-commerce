export interface Banner {
  title: string;
  text?: string;
  link: string;
  linkText: string;
  image: string;
}

const banners: Banner[] = [
  {
    title: 'Slide 1',
    text: 'Lorem ipsum dolor sit amet consectetur',
    link: '/products',
    linkText: 'Shop now',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    title: 'Slide 2',
    text: 'Lorem ipsum dolor sit amet consectetur',
    link: '/products',
    linkText: 'Shop now',
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
  {
    title: 'Slide 3',
    text: 'Lorem ipsum dolor sit amet consectetur',
    link: '/products',
    linkText: 'Shop now',
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  },
];

export default banners;
