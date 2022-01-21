import Footer from "./footer";
import Meta from "./meta";
import Naivgation from "./navigation";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen md:min-h-full">
        <Naivgation />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
