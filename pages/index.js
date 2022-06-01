import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Buy Physical NFTs</h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <Image src="/images/teeone.png" width={400} height={400} />
            <p>Very expensive tshirt 1</p>
          </a>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <Image src="/images/teetwo.png" width={400} height={400} />
            <p>Very expensive tshirt 2</p>
          </a>
        </div>
      </main>
    </div>
  );
}
