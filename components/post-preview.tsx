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
      <div className="rounded-lg cursor-pointer shadow-2xl">
        <div className="mb-5 rounded-md">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <div className="mx-6 my-4">
          <h3 className="text-3xl mb-3 leading-snug font-bold mr-10">
            <a>{title}</a>
          </h3>
          {/* <p className="text-lg leading-relaxed mb-4 text-sky-800">{excerpt}</p> */}
          <div className="text-right">
            {new Date(date).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
