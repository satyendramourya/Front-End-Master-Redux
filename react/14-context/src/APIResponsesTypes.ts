export type Animal = "dog" | "cat" | "bird" | "rabbit" | "reptile";
export interface Pet {
  id: number;
  name: string;
  animal: Animal;
  description: string;
  images: string[];
  breed: string;
  city: string;
  state: string;
}
export interface PetApiResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: Pet[];
}
export interface BreedApiResponse {
  breeds: string[];
  animal: Animal;
}
