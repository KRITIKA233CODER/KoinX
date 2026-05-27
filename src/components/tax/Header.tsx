import { ThemeToggle } from "./ThemeToggle";
import logo from "../../../images/logo.png";

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" aria-label="KoinX home" className="inline-flex items-center">
          <img src={logo} alt="KoinX" className="h-7 w-auto sm:h-8" />
        </a>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}