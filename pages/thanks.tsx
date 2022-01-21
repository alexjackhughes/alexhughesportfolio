import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import Naivgation from "../components/navigation";
import Meta from "../components/meta";
import { Footer } from "../components/footer";

const Thanks = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Meta />
      <div className="relative h-screen w-screen">
        <Confetti width={width} height={height} />
        <div className="absolute w-screen">
          <Naivgation />
          <div className="w-1/3 mt-64 mx-auto h-full bg-sky-800 rounded-xl shadow-2xl py-8 px-8 text-center">
            <h3 className="text-6xl mb-3 leading-snug font-bold text-white">
              Wow, thanks! 🎉
            </h3>
            <p className="text-sky-100 text-xl poppins">
              Thanks a lot for subscribing, you'll receive the first chapter
              when it's hot off the press!
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <Meta />
      <div className="min-h-screen md:min-h-full w-screen">
        <Naivgation />
        <div className="h-96  w-screen">
          <Confetti width={width} height={height} />

          <p>wow, thanks</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Thanks;
