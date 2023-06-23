import { IStructure } from "../types/structure.types";
import { generateRandomWord } from "../utils/randomWord";

const STRUCT_COUNT = 20;

function generateStructures(): IStructure[] {
  const structures: IStructure[] = [];

  Array.from(Array(STRUCT_COUNT)).forEach((_) => {
    const name = generateRandomWord();
    const value = generateRandomWord();

    structures.push({ name, value });
  });

  return structures;
}

export const structures: IStructure[] = generateStructures();
