import { Banner } from './banners';

interface BannerItemProps {
  banner: Banner;
}

const BannerItem: React.FC<BannerItemProps> = ({ banner }) => {
  return (
    <div>
      <div className="w-96 h-96 bg-red-100" />
      <h2>{banner.title}</h2>
    </div>
  );
};

export default BannerItem;
