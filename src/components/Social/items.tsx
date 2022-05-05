import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

export interface SocialItem {
  name: string;
  link: string;
  Icon: React.ReactNode;
}

export const socialItems: SocialItem[] = [
  { name: 'facebook', link: '/', Icon: <AiFillFacebook /> },
  { name: 'instagram', link: '/', Icon: <AiFillInstagram /> },
  { name: 'twitter', link: '/', Icon: <AiFillTwitterCircle /> },
  { name: 'pinterest', link: '/', Icon: <BsPinterest /> },
];

export default socialItems;
