import { IStructure } from "../types/structure.types";
import { generateRandomWord } from "../utils/randomWord";

function generateStructures(): IStructure[] {
  const structures: IStructure[] = [];

  Array.from(Array(10)).forEach((_) => {
    const name = generateRandomWord();
    const value = generateRandomWord();

    structures.push({ name, value });
  });

  return structures;
}

export const structures: IStructure[] = generateStructures();
