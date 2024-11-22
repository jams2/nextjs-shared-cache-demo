interface Character {
  name: string;
  gender: string;
  yearOfBirth?: number;
  deceased?: boolean;
  hologram?: boolean;
  serialNumber?: string;
  rank?: string;
  species?: string[];
}

export async function getCharacter(uid: string): Promise<Character> {
  const response = await fetch(`https://stapi.co/api/v1/rest/character?uid=${uid}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch character data');
  }

  const data = await response.json();
  return data.character;
}
