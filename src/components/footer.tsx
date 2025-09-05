import { BsTwitterX, BsSuitHeartFill, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto flex flex-row items-center justify-between px-4">
        {/* Left Side */}
        <div className="flex items-center space-x-2">
          <span className="flex items-center">
            Built with <BsSuitHeartFill className="ml-1 mr-1 text-red-500" />
            by Prarthana
          </span>
        </div>
        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <a href="https://twitter.com/panic_coder" target="_blank" rel="noopener noreferrer">
            <BsTwitterX size={24} />
          </a>
          <a href="https://github.com/hitoriiiiiiii/TeleCast/" target="_blank" rel="noopener noreferrer">
            <BsGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/prarthana-gade-400040256/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
