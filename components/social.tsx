import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  isWhite?: boolean;
}

const Social: React.FC<Props> = ({ isWhite = false }) => {
  const color = isWhite ? "text-white" : "text-sky-900";
  return (
    <div className="flex flex-row items-center w-full justify-center">
      <a
        href="https://twitter.com/alexjackhughes"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon
          icon={{ prefix: "fab", iconName: "twitter" }}
          className={`text-sm h-12 w-12 hover:bg-slate-100 p-3 rounded ${color}`}
        />
      </a>
      <a
        href="https://github.com/alexjackhughes"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon
          icon={{ prefix: "fab", iconName: "github-alt" }}
          className={`text-sm h-12 w-12 hover:bg-slate-100 p-3 rounded ${color}`}
        />
      </a>
      <a
        href="https://linkedin.com/in/alexjackhughes"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon
          icon={{ prefix: "fab", iconName: "linkedin-in" }}
          className={`text-sm h-12 w-12 hover:bg-slate-100 p-3 rounded ${color}`}
        />
      </a>
    </div>
  );
};

export default Social;
