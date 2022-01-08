const HomeSplash: React.FC = () => {
  return (
    <div className="h-full w-full py-32 md:py-64">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold md:leading-none text-center md:text-left text-sky-800">
        Hi, I'm <span className="skittles">Alex</span>.
      </h1>
      <p className="mt-6 poppins text-sky-800 text-center md:text-left text-2xl">
        CTO of Loopin
      </p>
    </div>
  );
};

export default HomeSplash;
