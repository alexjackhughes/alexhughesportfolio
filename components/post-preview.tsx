import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Link from "next/link";
import dayjs from "dayjs";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  const today = dayjs(date);
  const day = today.format("D");

  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className="rounded-2xl cursor-pointer shadow-2xl bg-sky-800 group">
        <div className="mb-5 rounded-md">
          <CoverImage
            slug={slug}
            title={title}
            src={coverImage}
            isFullyRounded="rounded-t-2xl"
          />
        </div>
        <div className="mx-6 my-4">
          <h3 className="text-3xl mb-3 leading-snug font-bold mr-10 text-sky-100">
            <a className="text-sky-100">{title}</a>
          </h3>
          <div className="flex flex-col justify-right items-end">
            <p className="bg-sky-100 p-2 rounded poppins text-sky-800 mb-6">
              {`${day}${nth(day)} ${today.format("MMMM")}`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const nth = function (day: string) {
  const d: number = parseInt(day);

  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export default PostPreview;
