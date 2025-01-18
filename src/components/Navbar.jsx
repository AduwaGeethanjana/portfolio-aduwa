import logo from "../assets/aduwaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://drive.google.com/file/d/15OMj2NMRSNq8UwZ_bDBfuouL2GXqgghb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          CV
        </a>
        <a
          href="https://www.linkedin.com/in/aduwa-geethanjana/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AduwaGeethanjana"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://medium.com/@sarageethanjana"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FaMedium />
        </a>
        <a
          href="https://www.instagram.com/aduwa_geethanjana?igsh=MWRuNmFpazVxd2hnbQ%3D%3D&utm_source=qr "
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
