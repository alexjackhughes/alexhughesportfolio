import Container from "./container";

const HomeAbout: React.FC = () => {
  return (
    <>
      <div className="bg-sky-800 py-20">
        <Container>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold md:leading-none text-center md:text-left text-sky-100 mb-10">
            Lorem Ipsum
          </h1>
          <div className=" lg:w-2/3">
            <p className="text-sky-100 text-xl mb-3">
              It still needs a bit of polish, which is why I've decided to
              release it chapter by chapter to everyone who wants it - just
              subscribe below and I'll add you to the list!
            </p>
            <p className="text-sky-100 text-xl mb-1">
              It still needs a bit of polish, which is why I've decided to
              release it chapter by chapter to everyone who wants it - just
              subscribe below and I'll add you to the list!
            </p>
          </div>
        </Container>
      </div>
      <img src="/waves/home.svg" className="w-screen rotate-180" />
    </>
  );
};

export default HomeAbout;
