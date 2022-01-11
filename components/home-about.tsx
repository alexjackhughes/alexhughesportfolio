import Container from "./container";

const HomeAbout: React.FC = () => {
  return (
    <>
      <div className="bg-sky-800 py-20">
        <Container>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold md:leading-none text-center md:text-left text-white mb-10">
            About me
          </h1>
          <div className=" lg:w-4/5">
            <p className="text-sky-100 text-xl mb-5">
              My name is Alexander Jack Hughes, but you can call me Alex. I'm a
              full-stack engineer and builder of high-growth startups. To give
              you a quick history lesson; I've been coding for the better part
              of a decade, whilst achieving an MSc in Computer Science and
              writing a few things for Hackernoon.
            </p>
            <p className="text-sky-100 text-xl mb-5">
              I can name drop if you'd like?
            </p>
            <p className="text-sky-100 text-xl mb-5">
              Right now, I'm the CTO of{" "}
              <Link href="https://letsloopin.com">Loopin</Link> - a startup
              driving much needed change in building startup culture. Before
              that I worked at a couple of pretty successful startups,{" "}
              <Link href="https://tumelo.com">Tumelo</Link> and{" "}
              <Link href="https://www.huckletree.com">Huckletree</Link>{" "}
              included. And before <span className="italic">that</span>, I
              designed the UI/UX for UpdraftPlus - which, with more than 3
              million downloads is one of the most downloaded plugins on
              WordPress.
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

interface Props {
  href: string;
}

const Link: React.FC<Props> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="hover:underline hover:underline-offset-1 text-sky-100 font-semibold"
  >
    {children}
  </a>
);

export default HomeAbout;
