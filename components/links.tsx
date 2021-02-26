import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Links.module.css";

const Links = () => (
  <div className={styles.links}>
    <a href="https://github.com/sezze" aria-label="GitHub">
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/sebastian-aarnio-8852aa157/"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>
  </div>
);

export default Links;
