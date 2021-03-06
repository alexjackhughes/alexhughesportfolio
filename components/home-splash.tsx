const HomeSplash: React.FC = () => {
  // Hey you! Yes you, reading this - feel free to submit a PR with other ideas! 🙏
  const phrases = [
    "all round great guy",
    "king of the north",
    "builder of high-growth startups",
    "passionate about startups",
    "Typescript Connoisseur",
    "dabbler in the dark arts",
    "wannabe AI artist",
    "React whisperer",
  ];

  return (
    <div className="h-full w-screen flex flex-col bg-sky-600 justify-between">
      <div className="my-32 md:mt-64 container mx-auto px-5 xl:px-64">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold md:leading-none text-center md:text-left text-white">
          Hi, I'm <span className="skittles">Alex</span>.
        </h1>
        <div className="poppins text-sky-100 text-center md:text-left mt-6 text-xl">
          <p className="mb-1">
            CTO of Loopin and{" "}
            {phrases[Math.floor(Math.random() * phrases.length)]}
          </p>
        </div>
      </div>
      <img src="/waves/home.svg" className="w-screen" />
    </div>
  );
};

export default HomeSplash;
