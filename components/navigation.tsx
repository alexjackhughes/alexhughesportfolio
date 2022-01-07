import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import linkedin from "./icons/linkedin.svg";
import twitter from "./icons/twitter.svg";
import github from "./icons/github.svg";

const Naivgation = () => {
  return (
    <header
      style={{
        background: "rgba(255, 255, 255, 0.89)",
      }}
      className="sticky top-0 z-50 py-2"
    >
      <div className="flex flex-col xl:flex-row justify-between items-center container mx-auto px-5 xl:px-64">
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
    <div className="order-1">
      {showBlink ? (
        <Link href="/">
          <Image
            onClick={() => {
              setShowBlink(false);
            }}
            src="/logo/Alex Hughes | Logo - Blink.svg"
            className="cursor-pointer bounce"
            height={75}
            width={75}
          />
        </Link>
      ) : (
        <Image
          onClick={() => {
            setShowBlink(true);
          }}
          src="/logo/Alex Hughes | Logo.svg"
          className="cursor-pointer"
          height={75}
          width={75}
        />
      )}
    </div>
  );
};

const SocialLinks: React.FC = () => (
  <div className="order-3 md:order-2">
    <NavLink href="https://twitter.com/alexjackhughes">
      <Image
        src="/icons/twitter.svg"
        className="cursor-pointer bounce"
        height={75}
        width={75}
      />
    </NavLink>
    <NavLink href="https://github.com/alexjackhughes">Github</NavLink>
    <NavLink href="https://www.linkedin.com/in/alexjackhughes/">
      LinkedIn
    </NavLink>
  </div>
);

const NavLinks: React.FC = () => (
  <div className="order-2 md:order-3">
    <NavLink href="/">Home</NavLink>
    <NavLink href="/posts">Blog</NavLink>
  </div>
);

interface Props {
  href: string;
}
const NavLink: React.FC<Props> = ({ href, children }) => (
  <Link href={href}>
    <a className="hover:bg-slate-100 p-3 rounded poppins text-sky-800 font-medium mx-2">
      {children}
    </a>
  </Link>
);

export default Naivgation;
