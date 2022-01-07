import { FunctionComponent } from "react";
import Image from "next/image";

const Header: FunctionComponent = () => {
  return (
    <div className="flex flex-row items-center h-32 w-full justify-between bg-red-500 sticky top-0 z-50">
      <Image src="/logo/Alex Hughes | Logo.svg" height={100} width={100} />
      <div>
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
        <h1 className="text-2xl font-bold underline text-purple">
          Hello world!
        </h1>
      </div>
    </div>
  );
};

export default Header;
