import GraduateCountdown from "./graduate-countdown";
import styles from "../styles/Bio.module.css";

const Bio = () => {
  return (
    <div className={styles.bio}>
      <p>
        I'm a Software Engineering student at{" "}
        <a href="https://www.abo.fi/en/">Åbo Akademi University</a>{" "}
        <i>(master's)</i>.
      </p>
      <p>
        I have an interest in <em> web </em> and <em> game development</em>. I
        currently spend most of my development time in <em> TypeScript </em> and{" "}
        <em> C#</em>.
      </p>
      <p>
        Graduating in <GraduateCountdown />. Or in other words,{" "}
        <em>May 2023</em>.
      </p>
    </div>
  );
};

export default Bio;
