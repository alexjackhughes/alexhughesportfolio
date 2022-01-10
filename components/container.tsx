import { ReactNode, FunctionComponent } from "react";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="container mx-auto px-5 xl:px-64 z-50">{children}</div>;
};

export default Container;
