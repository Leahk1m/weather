"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex justify-end w-full p-5">
      <Toggle onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </Toggle>
    </div>
  );
}
