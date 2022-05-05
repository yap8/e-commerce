import { MdLocationOn } from 'react-icons/md';
import { RiPhoneFill } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';

interface Contact {
  text: string;
  Icon: React.ReactNode;
}

const contacts: Contact[] = [
  { text: 'Lorem ipsum dolor sit amet consectetur.', Icon: <MdLocationOn /> },
  {
    text: '+1 234 56 78',
    Icon: <RiPhoneFill />,
  },
  { text: 'nebozhenko.arseny@gmail.com', Icon: <BiEnvelope /> },
];

export default contacts;
