import { atom } from "nanostores";

export const theme = atom<"dark" | "light">(
  (localStorage.getItem("theme") as "dark" | "light") || "light"
);
