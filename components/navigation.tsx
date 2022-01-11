import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Social from "./social";

const Naivgation = () => {
  return (
    <header
      style={{
        background: "rgba(11,36,64, 0.89)",
      }}
      className="sticky top-0 z-50 py-2"
    >
      <div className="flex flex-col xl:flex-row justify-between items-center container mx-auto px-5 xl:px-64">
        <Logo />
        <div className="order-3 md:order-2 hidden md:flex">
          <Social />
        </div>
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

const NavLinks: React.FC = () => (
  <div className="order-2 md:order-3 mb-3 sm:mb-0 mt-2 sm:mt-0">
    <NavLink href="/">HOME</NavLink>
    <NavLink href="/posts">LIBRARY</NavLink>
  </div>
);

interface Props {
  href: string;
}
const NavLink: React.FC<Props> = ({ href, children }) => (
  <Link href={href}>
    <a className="hover:bg-slate-100 p-3 rounded poppins text-sky-100 hover:text-sky-900 font-semibold mx-2">
      {children}
    </a>
  </Link>
);

export default Naivgation;
