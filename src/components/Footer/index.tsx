import Link from '../Link';
import Logo from '../Logo';
import { SocialList } from '../Social';
import links from './links';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container flex justify-center">
        <div className="flex-1 flex flex-col pr-10">
          <div className="h-12">
            <Logo href="/" />
          </div>
          <p className="mt-auto mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            reiciendis error delectus autem provident natus explicabo unde
            dicta. Ratione, itaque.
          </p>
          <SocialList
            items={['facebook', 'instagram', 'twitter', 'pinterest']}
          />
        </div>
        <div className="flex-1 flex flex-col pr-10">
          <div className="h-12">
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
        <div className="flex-1">
          <div className="h-12">
            <div>CONTACT</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
