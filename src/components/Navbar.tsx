import Link from "next/link";
import { ModeToggle } from "~/components/ModeToggle";
import { Github } from "lucide-react";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <header className="container sticky inset-0 py-4">
      <nav className="bg-secondary flex items-center justify-between gap-4 rounded-xl bg-opacity-5 p-4 backdrop-blur-md">
        <Link href={"/"} className="text-primary text-xl font-semibold italic">
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
                size: "sm",
                className: "ring-1 ring-zinc-400 hover:opacity-80",
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
