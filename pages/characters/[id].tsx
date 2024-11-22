import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getCharacter } from '@/lib/api';
import styles from '@/styles/Home.module.css';

interface CharacterProps {
  character: {
    name: string;
    gender: string;
    yearOfBirth?: number;
    deceased?: boolean;
    hologram?: boolean;
    serialNumber?: string;
    rank?: string;
    species?: string[];
  };
}

export default function Character({ character }: CharacterProps) {
  return (
    <>
      <Head>
        <title>{character.name} - Star Trek: TNG Character</title>
        <meta name="description" content={`Learn about ${character.name} from Star Trek: The Next Generation`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
        
        <h1 className={styles.title}>{character.name}</h1>
        
        <div className={styles.characterInfo}>
          <p><strong>Gender:</strong> {character.gender}</p>
          {character.rank && <p><strong>Rank:</strong> {character.rank}</p>}
          {character.serialNumber && <p><strong>Serial Number:</strong> {character.serialNumber}</p>}
          {character.yearOfBirth && <p><strong>Year of Birth:</strong> {character.yearOfBirth}</p>}
          {character.species && <p><strong>Species:</strong> {character.species.join(', ')}</p>}
          {character.hologram && <p><em>Holographic Character</em></p>}
          {character.deceased && <p><em>Deceased</em></p>}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const character = await getCharacter(params?.id as string);
    
    return {
      props: {
        character,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
