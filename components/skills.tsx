import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Skills.module.css";

const Skills = () => (
  <div className={styles.skills}>
    <div className={styles.skillGroup}>
      <h2>I'm comfortable with</h2>
      <ul className={styles.skillList}>
        <li>C#</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Java</li>
        <li>Python</li>
        <li>Lua</li>
        <li>
          <i>Web development</i>
          <ul>
            <li>Front- &amp; back-end</li>
          </ul>
        </li>
        <li>
          <i>Game development</i>
          <ul>
            <li>Unity &amp; Unreal</li>
          </ul>
        </li>
      </ul>
    </div>
    <div className={styles.skillGroup}>
      <h2>I'm learning</h2>
      <ul className={styles.skillList}>
        <li>C &amp; C++</li>
        <li>Go</li>
        <li>
          <i>Machine learning</i>
        </li>
      </ul>
    </div>
  </div>
);

export default Skills;
