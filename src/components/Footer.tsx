import Logo from './Logo';
import { SocialList } from './Social';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container flex items-center justify-center">
        <div className="flex-1 flex flex-col">
          <Logo href="/" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            reiciendis error delectus autem provident natus explicabo unde
            dicta. Ratione, itaque.
          </p>
          <SocialList
            items={['facebook', 'instagram', 'twitter', 'pinterest']}
          />
        </div>
        <div className="flex-1">
          <div className="mb-auto">LINKS</div>
        </div>
        <div className="flex-1">
          <div>CONTACT</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
