import type React from "react";
import { LightMode } from "../assets/svgs/LightMode";
import { DarkMode } from "../assets/svgs/DarkMode";
import { useStore } from "@nanostores/react";
import { theme } from "../store/theme";
import { useEffect } from "react";
interface Props extends React.PropsWithChildren {}

export default function ToggleTheme() {
  const $theme = useStore(theme);
  const onToggle = () => {
    const newtheme = $theme === "dark" ? "light" : "dark";

    theme.set(newtheme);
  };
  useEffect(() => {
    document.querySelector("html")?.classList.add($theme);
    return () => {
      document.querySelector("html")?.classList.remove($theme);
    };
  }, [$theme]);
  return (
    <>
      {$theme === "dark" && (
        <LightMode
          onClick={onToggle}
          className="fill-slate-800 cursor-pointer dark:fill-amber-400"
        />
      )}
      {$theme === "light" && (
        <DarkMode
          onClick={onToggle}
          className="fill-slate-800 cursor-pointer dark:fill-amber-400"
        />
      )}
    </>
  );
}
