import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="mt-24 mb-12 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left text-sky-800">
      {children}
    </h1>
  );
};

export default PostTitle;
