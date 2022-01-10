import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";
import lengthToMinutes from "../lib/lengthToMinutes";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className="rounded-2xl cursor-pointer shadow-2xl bg-sky-800">
        <div className="mb-5 rounded-md">
          <CoverImage
            slug={slug}
            title={title}
            src={coverImage}
            isFullyRounded="rounded-t-2xl"
          />
        </div>
        <div className="mx-6 my-4">
          <h3 className="text-3xl mb-3 leading-snug font-bold mr-10">
            <a>{title}</a>
          </h3>
          <div className="flex flex-col justify-right items-end">
            <p className="bg-slate-100 p-3 rounded poppins text-sky-800">
              {new Date(date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
