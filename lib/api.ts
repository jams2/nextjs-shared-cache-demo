interface Character {
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

export async function getCharacter(id: string): Promise<Character> {
  const response = await fetch(`https://swapi.dev/api/people/${id}/`)

  if (!response.ok) {
    throw new Error('Failed to fetch character data')
  }

  const data = await response.json()
  return data
}

import { featuredCharacters } from '@/pages/index'

export async function getAllCharacterIds(): Promise<string[]> {
  return featuredCharacters.map((character) => character.id)
}

export async function revalidateCharacter(id: string) {
  try {
    await fetch(`/api/revalidate?id=${id}`)
    return true
  } catch (error) {
    return false
  }
}
