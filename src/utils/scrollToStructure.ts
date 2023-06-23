import { IStructure } from "../types/structure.types";
import { sleep } from "./sleep";

export const scrollToStructure = (name: IStructure["name"]) => {
  const element = document.querySelector(`[data-name="${name}"]`);

  console.log(element);

  if (!element) return;

  element.scrollIntoView({ block: "center" });

  element.classList.add("highlighted");

  sleep(1000).then((_) => element.classList.remove("highlighted"));
};
