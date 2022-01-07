import Image from "next/image";
import Social from "./social";

const Footer: React.FC = () => {
  return (
    <div>
      <img src="/waves/footer.svg" className="w-full -mb-3 md:-mb-10" />
      <footer className="w-full bg-pink flex flex-row items-center">
        <div className="mx-auto flex flex-col items-center my-10 md:my-20">
          <Image
            src="/logo/Alex Hughes | Logo - Pink.svg"
            height={75}
            width={75}
          />
          <p className="poppins text-sky-800 text-xl mt-5 mb-1">
            Alex Jack Hughes
          </p>
          <p className="poppins text-sky-800">{new Date().getUTCFullYear()}</p>
          <div className="mt-10">
            <Social />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
