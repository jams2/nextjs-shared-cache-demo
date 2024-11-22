import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

// Featured Star Wars characters with their IDs from SWAPI
export const featuredCharacters = [
  { id: "1", name: "Luke Skywalker", role: "Jedi Knight" },
  { id: "4", name: "Darth Vader", role: "Sith Lord" },
  { id: "3", name: "R2-D2", role: "Astromech Droid" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wars Character Database</title>
        <meta name="description" content="Explore characters from the Star Wars universe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Star Wars Universe
        </h1>
        
        <p className={styles.description}>
          Explore the legendary characters of a galaxy far, far away...
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
