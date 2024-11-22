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
  
  // Fetch starship names
  const starshipPromises = data.starships.map(async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) return 'Unknown Starship'
    const shipData = await response.json()
    return shipData.name
  })

  // Fetch vehicle names
  const vehiclePromises = data.vehicles.map(async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) return 'Unknown Vehicle'
    const vehicleData = await response.json()
    return vehicleData.name
  })

  // Fetch film titles
  const filmPromises = data.films.map(async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) return 'Unknown Film'
    const filmData = await response.json()
    return filmData.title
  })

  const [starships, vehicles, films] = await Promise.all([
    Promise.all(starshipPromises),
    Promise.all(vehiclePromises),
    Promise.all(filmPromises)
  ])

  return {
    ...data,
    starships,
    vehicles,
    films
  }
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
