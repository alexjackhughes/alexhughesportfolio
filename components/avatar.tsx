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
      <h3 className="text-xl font-normal mb-1 text-slate-900">{name}</h3>
      <h4 className="text-md font-normal text-slate-400">CTO of Loopin</h4>
    </div>
  );
};

export default Avatar;
