import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const links = {
  Github: "https://github.com/fazalkadivar21",
  Twitter: "https://x.com/fazalkadivar21",
  Linkedin: "https://linkedin.com/in/fazalkadivar",
};

function Buttons() {
  return (
    <div className="px-7 space-y-6 pb-5 mb-5">
      <h2 className="text-2xl">Find me on</h2>
      <div className="flex space-x-4 ml-4 pl-4">
        {Object.entries(links).map(([key, value]) => (
          <a
            href={value}
            key={key}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            <FontAwesomeIcon icon={key === 'Github' ? faGithub : key === 'Twitter' ? faXTwitter : faLinkedin} size="2x" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
