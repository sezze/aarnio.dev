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
        <meta
          name="description"
          content="I'm a Software Engineering student at Åbo Akademi University (master's). I have an interest in web and game development. I currently spend most of my development time in TypeScript and C#."
        />
        <meta
          name="keywords"
          content="Sebastian Aarnio, Aarnio, Åbo, Turku, Developer"
        />
        <meta property="og:locale" content="fi_FI" />
        <meta property="og:type" content="profile" />
        <meta
          property="og:description"
          content="I'm a Software Engineering student at Åbo Akademi University (master's). I have an interest in web and game development. I currently spend most of my development time in TypeScript and C#."
        />
        <meta property="profile:first_name" content="Sebastian" />
        <meta property="profile:last_name" content="Aarnio" />
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
