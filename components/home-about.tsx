import Container from "./container";

const HomeAbout: React.FC = () => {
  return (
    <>
      <div className="bg-sky-800 py-20">
        <Container>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold md:leading-none text-center md:text-left text-sky-100 mb-10">
            Who am I?
          </h1>
          <div className=" lg:w-4/5">
            <p className="text-sky-100 text-xl mb-5">
              I'm the CTO of Loopin. When I'm not busy building our full-stack
              app or growing our team, I spend my days tinkering with AI art
              projects and writing for Hackernoon.
            </p>
            <p className="text-sky-100 text-xl mb-5">
              Would you like a quick history lesson? Sure! I've spent the last
              decade coding in the startup space, in every position from junior
              developer to CTO. I've had the pleasure to work for some of the
              most interesting startups in the South West and London.
            </p>
            <p className="text-sky-100 text-xl mb-5">Which startups you ask?</p>
            <p className="text-sky-100 text-xl mb-5">
              Right now, I'm the CTO of{" "}
              <Link href="https://letsloopin.com">
                <a>Loopin</a>
              </Link>
              . I joined when it was two marines and a tin shed - and now, we
              have one of the most interesting people analytics platforms in the
              world.
            </p>
            <p className="text-sky-100 text-xl mb-5">
              Before that, I was building{" "}
              <Link href="https://tumelo.com">
                <a>Tumelo</a>
              </Link>{" "}
              helping to bring transparency to where your money goes. And before
              that, I was the 2nd dev hire at{" "}
              <Link href="https://www.huckletree.com">
                <a>Huckletree</a>
              </Link>{" "}
              (one of Europe's fastest growing workspaces). And before{" "}
              <span className="italic">that</span>, I designed the UI/UX for{" "}
              <Link href="https://wordpress.org/plugins/updraftplus/">
                <a>UpdraftPlus</a>
              </Link>{" "}
              . Which, with over 3 million downloads, is one of the most
              downloaded plugins on WordPress.
            </p>
            <p className="text-sky-100 text-xl mb-5">
              But enough about me. How have you been?
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
    className="hover:underline hover:underline-offset-1 text-sky-100 font-semibold focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-sky-100 rounded"
  >
    {children}
  </a>
);

export default HomeAbout;
