import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getCharacter, getAllCharacterIds } from '@/lib/api'
import styles from '@/styles/Home.module.css'

interface CharacterProps {
  character: {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: string
    films: string[]
    species: string[]
    vehicles: string[]
    starships: string[]
  }
  buildInfo: {
    timestamp: string
  }
}

export default function Character({ character, buildInfo }: CharacterProps) {
  return (
    <>
      <Head>
        <title>{`${character.name} - Star Wars Character`}</title>
        <meta
          name="description"
          content={`Learn about ${character.name} from the Star Wars universe`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>

        <h1 className={styles.title}>{character.name}</h1>

        <div className={styles.characterInfo}>
          <p>
            <strong>Height:</strong> {character.height}cm
          </p>
          <p>
            <strong>Mass:</strong> {character.mass}kg
          </p>
          <p>
            <strong>Hair Color:</strong> {character.hair_color}
          </p>
          <p>
            <strong>Skin Color:</strong> {character.skin_color}
          </p>
          <p>
            <strong>Eye Color:</strong> {character.eye_color}
          </p>
          <p>
            <strong>Birth Year:</strong> {character.birth_year}
          </p>
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
          {character.species.length > 0 && (
            <p>
              <strong>Species:</strong>{' '}
              {Array.isArray(character.species) ? character.species.join(', ') : 'Unknown'}
            </p>
          )}
          {character.vehicles.length > 0 && (
            <div>
              <strong>Vehicles:</strong>
              <ul className={styles.list}>
                {character.vehicles.map((vehicle, index) => (
                  <li key={index}>{vehicle}</li>
                ))}
              </ul>
            </div>
          )}
          {character.starships.length > 0 && (
            <div>
              <strong>Starships:</strong>
              <ul className={styles.list}>
                {character.starships.map((starship, index) => (
                  <li key={index}>{starship}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <strong>Featured in:</strong>
            <ul className={styles.list}>
              {character.films.map((film, index) => (
                <li key={index}>{film}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.buildInfo}>
          <p>
            <strong>Page Built:</strong>{' '}
            {new Date(buildInfo.timestamp).toLocaleString('en-GB', {
              dateStyle: 'full',
              timeStyle: 'long',
            })}
          </p>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = await getAllCharacterIds()

  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const character = await getCharacter(params?.id as string)

    return {
      props: {
        character,
        buildInfo: {
          timestamp: new Date().toISOString(),
        },
      },
      revalidate: false,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
