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
    link: 'asdf',
    linkText: 'Shop now',
    image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
  },
  {
    title: 'Slide 2',
    text: 'Lorem ipsum dolor sit amet consectetur',
    link: 'asdf',
    linkText: 'Shop now',
    image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
  },
  {
    title: 'Slide 3',
    text: 'Lorem ipsum dolor sit amet consectetur',
    link: 'asdf',
    linkText: 'Shop now',
    image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
  },
];

export default banners;
