type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-10">
      <img
        src={picture}
        className="w-20 h-20 rounded-full mb-4 shadow-sm"
        alt={name}
      />
      <h3 className="text-xl font-normal mb-1 text-sky-800">{name}</h3>
      <h4 className="text-md font-normal text-sky-800 opacity-30">
        CTO of Loopin
      </h4>
    </div>
  );
};

export default Avatar;
