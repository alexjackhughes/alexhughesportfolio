import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <img src="/waves/footer.svg" className="w-full -mb-3 md:-mb-10" />
      <footer className="w-full bg-pink flex flex-row items-center">
        <div className="mx-auto flex flex-col items-center my-10 md:my-20">
          <Image
            src="/logo/Alex Hughes | Logo - Pink.svg"
            height={75}
            width={75}
          />
          <p className="poppins text-sky-800 text-xl mt-5 mb-1">
            Alexander Jack Hughes
          </p>
          <p className="poppins text-sky-800">{new Date().getUTCFullYear()}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
