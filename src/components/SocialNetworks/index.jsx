import "./index.sass";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedin /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetWorks = () => {
  return (
    <section id="social_networks">
      {socialNetworks.map((item) => {
        return (
          <a href="#" className="social_btn" id={item.name} key={item.name}>
            {item.icon}
          </a>
        );
      })}
    </section>
  );
};

export default SocialNetWorks;
