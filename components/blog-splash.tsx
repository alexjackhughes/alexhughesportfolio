const BlogSplash: React.FC = () => {
  return (
    <div className="h-full w-screen flex flex-col bg-sky-800 justify-between">
      <div className="my-32 md:mt-64 container mx-auto px-5 xl:px-64">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold md:leading-none text-center md:text-left text-white mb-10">
          My <span className="skittles">Library</span>
        </h1>
        <div className="poppins text-sky-100 text-center md:text-left mt-6 text-xl">
          <p className="mb-1">
            A place to share my completely unbiased opinion
          </p>
          <p>on the entirety of civilisation.</p>
        </div>
      </div>
      <img src="/waves/blogs.svg" className="w-screen" />
    </div>
  );
};

export default BlogSplash;
