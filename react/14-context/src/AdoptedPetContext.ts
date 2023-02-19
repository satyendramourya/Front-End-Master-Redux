import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1357,
    name: "fido",
    animal: "dog",
    description: "lorem ipsum",
    images: [],
    breed: "poodle",
    city: "New York",
    state: "NY",
  },
  () => {},
]);

export default AdoptedPetContext;
