import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import lengthToMinutes from "../lib/lengthToMinutes";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  textLength?: number;
};

const PostHeader = ({ title, coverImage, date, textLength = 0 }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <CoverImage title={title} src={coverImage} />
      <div className="flex flex-row justify-center mt-3.5">
        <p className="bg-sky-800 p-3 rounded poppins text-white">
          Read in {lengthToMinutes(textLength)}
        </p>
      </div>

      {/* <h4 className="text-xl font-normal text-slate-900 text-center my-7 text">
        You can read this in {lengthToMinutes(textLength)}
      </h4> */}
    </>
  );
};

export default PostHeader;
