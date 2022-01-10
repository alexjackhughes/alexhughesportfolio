import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social: React.FC = () => {
  return (
    <div className="flex flex-row items-center w-full justify-center">
      <a
        href="https://twitter.com/alexjackhughes"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon
          icon={{ prefix: "fab", iconName: "twitter" }}
          className="text-sm text-sky-900 h-12 w-12 hover:bg-slate-100 p-3 rounded"
        />
      </a>
      <a
        href="https://github.com/alexjackhughes"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon
          icon={{ prefix: "fab", iconName: "github-alt" }}
          className="text-sm text-sky-900 h-12 w-12 mx-2 hover:bg-slate-100 p-3 rounded"
        />
      </a>
      <a
        href="https://linkedin.com/in/alexjackhughes"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon
          icon={{ prefix: "fab", iconName: "linkedin-in" }}
          className="text-sm text-sky-900 h-12 w-12 hover:bg-slate-100 p-3 rounded"
        />
      </a>
    </div>
  );
};

export default Social;
