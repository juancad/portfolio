"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "./Icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme: currentTheme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(currentTheme);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setSelectedTheme(currentTheme);
  }, [currentTheme]); // Actualiza el estado local cuando cambia el tema actual

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = selectedTheme === "dark" ? "light" : "dark";
    setSelectedTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <Switch 
      defaultSelected={selectedTheme === "dark"}
      size="md"
      color="warning"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
      onClick={toggleTheme}
    />
  );
}
