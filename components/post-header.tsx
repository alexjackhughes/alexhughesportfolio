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
      <h4 className="text-xl font-normal text-sky-500 text-center my-7">
        {lengthToMinutes(30)}
      </h4>
    </>
  );
};

export default PostHeader;
