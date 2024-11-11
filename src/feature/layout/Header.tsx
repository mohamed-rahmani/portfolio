"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hook pour détecter si le rendu est côté client
function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

// Hook pour obtenir la taille de la fenêtre côté client
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const Header = () => {
  const isClient = useIsClient();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { width } = isClient ? useWindowSize() : { width: 0 };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!isClient) {
    return null;
  }

  return (
    <header className="flex justify-center mt-10 fixed w-screen z-50">
      {width > 485 ? (
        <nav className="flex items-center gap-8 px-8 py-4 rounded-full dark:bg-[#1a1a1a] bg-gray-100 bg-opacity-100 border border-[#4d4d4d] border-opacity-100">
          <Link href={"/"}>Accueil</Link>
          <Link href={"#experience"}>Expérience</Link>
          <Link href={"#projects"}>Projets</Link>
          <Link href={"#contact"}>Contact</Link>
          <ThemeToggle />
        </nav>
      ) : (
        <nav className="flex items-center gap-8 px-8 py-4 rounded-full dark:bg-[#1a1a1a] bg-gray-100 bg-opacity-100 border border-[#4d4d4d] border-opacity-100 z-50">
          <button
            onClick={toggleMenu}
            className="text-2xl md:hidden"
            aria-label="Ouvrir le menu"
          >
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href={"/"}>Accueil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={"/"}>Expérience</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={"/"}>Projets</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={"/"}>Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </button>
          <ThemeToggle />
        </nav>
      )}
    </header>
  );
};

export default Header;
