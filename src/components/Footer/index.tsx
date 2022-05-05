import Link from '../Link';
import Logo from '../Logo';
import { SocialList } from '../Social';
import contacts from './contacts';
import links from './links';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container flex justify-center py-10">
        <div className="flex-1 flex flex-col pr-10">
          <div className="h-14">
            <Logo href="/" />
          </div>
          <p className="mt-auto mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            reiciendis error delectus autem provident natus explicabo unde
            dicta. Ratione, itaque.
          </p>
          <SocialList
            items={['facebook', 'instagram', 'twitter', 'pinterest']}
          />
        </div>
        <div className="flex-1 flex flex-col pr-10">
          <div className="h-14">
            <h2 className="text-2xl font-semibold">Useful links</h2>
          </div>
          <ul className="flex flex-wrap">
            {links.map((link) => (
              <li className="w-1/2">
                <Link href={link.link}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="h-14">
            <h2 className="text-2xl font-semibold">Contact</h2>
          </div>
          <ul>
            {contacts.map((contact) => (
              <li className="flex mb-2">
                <div className="text-2xl mr-2">{contact.Icon}</div>
                <div>{contact.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
