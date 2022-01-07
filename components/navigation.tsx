import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Naivgation = () => {
  const [showBlink, setShowBlink] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white py-3">
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-5">
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
        <div className="hidden md:flex">
          <Link href="/">
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/">
            <a className="hover:underline">Blog</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/">
            <a className="hover:underline">Blog</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Naivgation;
