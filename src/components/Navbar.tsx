import Link from "next/link";
import { ModeToggle } from "~/components/ModeToggle";
import { Github } from "lucide-react";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <header className="container sticky inset-0 z-10 py-4">
      <nav className="flex items-center justify-between gap-4 rounded-xl bg-secondary bg-opacity-5 p-4 backdrop-blur-md">
        <Link href={"/"} className="text-xl font-semibold italic text-primary">
          ShortMe
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <ModeToggle />
          </li>
          <li>
            <Link
              href={"https://github.com/patelharsh9797/t3_app_url_shortener"}
              target="_blank"
              className={buttonVariants({
                className: "rounded-full hover:opacity-80",
                size: "icon",
              })}
            >
              <Github />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
