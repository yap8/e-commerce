import { Banner } from './banners';

interface BannerItemProps {
  banner: Banner;
}

const BannerItem: React.FC<BannerItemProps> = ({ banner }) => {
  return (
    <div className="flex">
      <div className="flex-1 py-80 pb-20 relative">
        <div
          className="h-full w-full absolute bottom-0 bg-bottom bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${banner.image})` }}
        />
      </div>
      <div className="flex-1 flex flex-col items-start py-80 pb-20">
        <h2 className="text-7xl uppercase font-semibold mt-auto mb-14">
          {banner.title}
        </h2>
        {banner.text && (
          <p className="text-3xl mb-14 uppercase">{banner.text}</p>
        )}
        <a
          className="flex px-6 py-3 border text-2xl border-gray-400 capitalize font"
          href={banner.link}
        >
          {banner.linkText}
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
