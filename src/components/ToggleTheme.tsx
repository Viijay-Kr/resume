import type React from "react";
import { LightMode } from "../assets/svgs/LightMode";
import { DarkMode } from "../assets/svgs/DarkMode";
import { useStore } from "@nanostores/react";
import { theme } from "../store/theme";
interface Props extends React.PropsWithChildren {}

export default function ToggleTheme() {
  const $theme = useStore(theme);
  const onToggle = () => {
    const newtheme = $theme === "dark" ? "light" : "dark";
    document.querySelector("html")?.classList.remove($theme);
    document.querySelector("html")?.classList.add(newtheme);
    theme.set(newtheme);
  };
  return (
    <div className="flex flex-row justify-end flex-1">
      {$theme === "dark" && (
        <LightMode
          onClick={onToggle}
          className="fill-slate-800 cursor-pointer dark:fill-amber-50"
        />
      )}
      {$theme === "light" && (
        <DarkMode
          onClick={onToggle}
          className="fill-slate-800 cursor-pointer dark:fill-amber-50"
        />
      )}
    </div>
  );
}
