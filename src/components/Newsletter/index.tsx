import { MdSend } from 'react-icons/md';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-blue-50">
      <div className="container flex flex-col items-center justify-center py-28">
        <h2 className="font-bold text-6xl mb-4">Newsletter</h2>
        <p className="text-2xl mb-4">Lorem ipsum dolor sit amet consectetur.</p>
        <form className="flex border border-gray-400">
          <input
            className="px-5 py-2 text-xl"
            type="email"
            placeholder="Your email"
          />
          <button className="px-5 bg-blue-400 text-white hover:bg-blue-500 transition">
            <MdSend className="text-2xl" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
