"use client";

import { Button } from "@/components/ui/button";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      <SunMedium
        size={20}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size={20}
        className="absolute rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};
