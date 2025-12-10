import { client } from '../lib/client';
import type { Breed } from '../model/breed.model';

export const getBreedCollection = async (): Promise<Breed[]> => {
  return await client.getContentList({ contentType: 'Breed' });
};
