import Container from "./container";

const HomeAbout: React.FC = () => {
  return (
    <>
      <div className="bg-sky-800 py-20">
        <Container>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold md:leading-none text-center md:text-left text-sky-100 mb-10">
            About me
          </h1>
          <div className=" lg:w-4/5">
            <p className="text-sky-100 text-xl mb-3">
              My name is Alexander Jack Hughes, but you can call me Alex. I'm a
              full-stack engineer and builder of high-growth startups. To give
              you a quick history lesson; I've been coding for the better part
              of a decade, whilst achieving an MSc in Computer Science and
              writing a few things for Hackernoon.
            </p>
            <p className="text-sky-100 text-xl mb-3">
              I can name drop if you'd like?
            </p>
            <p className="text-sky-100 text-xl mb-3">
              Right now, I'm bringing transparency to your money at Tumelo.
              Before that, I was the 2nd dev hire at Huckletree (one of Europe's
              fastest growing workspaces) and designed the UI/UX for UpdraftPlus
              - which, with more than 3 million downloads is one of the most
              downloaded plugins on WordPress.
            </p>
            <p className="text-sky-100 text-xl">
              But enough about me, how have you been?
            </p>
          </div>
        </Container>
      </div>
      <img src="/waves/home.svg" className="w-screen rotate-180" />
    </>
  );
};

export default HomeAbout;
