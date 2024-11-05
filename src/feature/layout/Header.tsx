import { ThemeToggle } from "@/src/theme/ThemeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center m-10">
      <nav className="flex items-center gap-8 pl-8 pr-8 pt-4 pb-4 rounded-lg border border-dark-700">
        <Link href={"/"}>Accueil</Link>
        <Link href={"/"}>Expérience</Link>
        <Link href={"/"}>Projets</Link>
        <Link href={"/"}>Contact</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
