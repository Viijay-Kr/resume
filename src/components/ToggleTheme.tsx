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
    localStorage.setItem("theme", newtheme);
    theme.set(newtheme);
  };
  useEffect(() => {
    document.querySelector("html")?.classList.add($theme);
    return () => {
      document.querySelector("html")?.classList.remove($theme);
    };
  }, [$theme]);
  return $theme === "dark" ? (
    <LightMode
      key={"light"}
      onClick={onToggle}
      className="cursor-pointer w-1.5 h-1.5 md:h-2 md:w-2 inline-block dark:fill-amber-50"
    />
  ) : (
    <DarkMode
      key={"dark"}
      onClick={onToggle}
      className="fill-slate-800 w-1.5 h-1.5 md:h-2 md:w-2  inline-block cursor-pointer "
    />
  );
}
