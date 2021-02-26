import Head from "next/head";
import Bio from "../components/bio";
import GraduateCountdown from "../components/graduate-countdown";
import Links from "../components/links";
import Skills from "../components/skills";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sebastian Aarnio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.nameTitle}>
          Sebastian
          <br />
          <span className={styles.lastName}>Aarnio</span>
        </h1>
        <Links />
        <Bio />
        <Skills />
      </main>
    </div>
  );
}
