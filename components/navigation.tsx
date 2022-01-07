import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Naivgation = () => {
  return (
    <header
      style={{
        background: "rgba(255, 255, 255, 0.8)",
      }}
      className="sticky top-0 z-50 py-3"
    >
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-5">
        <Logo />
        <SocialLinks />
        <NavLinks />
      </div>
    </header>
  );
};

const Logo = () => {
  const [showBlink, setShowBlink] = useState(false);

  return (
    <>
      {showBlink ? (
        <Image
          onClick={() => {
            setShowBlink(false);
          }}
          src="/logo/Alex Hughes | Logo - Blink.svg"
          className="cursor-pointer bounce"
          height={80}
          width={80}
        />
      ) : (
        <Image
          onClick={() => {
            setShowBlink(true);
          }}
          src="/logo/Alex Hughes | Logo.svg"
          className="cursor-pointer"
          height={80}
          width={80}
        />
      )}
    </>
  );
};

const SocialLinks: React.FC = () => (
  <div className="hidden md:flex">
    <a
      target="_blank"
      rel="noreferrer noopener"
      href="https://twitter.com/alexjackhughes"
    >
      <LinkText>Twitter</LinkText>
    </a>
    <a
      target="_blank"
      rel="noreferrer noopener"
      href="https://github.com/alexjackhughes"
    >
      <LinkText>Github</LinkText>
    </a>
    <a
      target="_blank"
      rel="noreferrer noopener"
      href="https://www.linkedin.com/in/alexjackhughes/"
    >
      <LinkText>LinkedIn</LinkText>
    </a>
  </div>
);

const NavLinks: React.FC = () => (
  <div>
    <Link href="/">
      <LinkText>Home</LinkText>
    </Link>
    <Link href="/">
      <LinkText>Blog</LinkText>
    </Link>
  </div>
);

const LinkText: React.FC = ({ children }) => (
  <a className="hover:underline">{children}</a>
);

export default Naivgation;
