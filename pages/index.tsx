import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

// These would typically come from an API or database
const featuredCharacters = [
  { id: "worf", name: "Worf", role: "Chief of Security" },
  { id: "data", name: "Data", role: "Second Officer" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Trek: TNG Character Database</title>
        <meta name="description" content="Explore characters from Star Trek: The Next Generation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Star Trek: The Next Generation
        </h1>
        
        <p className={styles.description}>
          Explore the crew of the USS Enterprise NCC-1701-D
        </p>

        <div className={styles.grid}>
          {featuredCharacters.map((character) => (
            <Link 
              href={`/characters/${character.id}`}
              key={character.id}
              className={styles.card}
            >
              <h2>{character.name}</h2>
              <p>{character.role}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
