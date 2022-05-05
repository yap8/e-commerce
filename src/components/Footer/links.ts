interface Link {
  text: string
  link: string
}

const links: Link[] = [
  { text: 'Home', link: '/' },
  { text: 'Cart', link: '/cart' },
  { text: "Men's fashion", link: '/products' },
  { text: "Women's fashion", link: '/products' },
  { text: 'Accessories', link: '/products' },
  { text: 'About', link: '/about' },
];

export default links
