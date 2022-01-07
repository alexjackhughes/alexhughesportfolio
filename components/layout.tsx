import Alert from "./alert";
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
      <Naivgation />
      <div className="min-h-screen bg-red-300">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
