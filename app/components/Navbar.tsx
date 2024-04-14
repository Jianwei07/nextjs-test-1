import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-3xl">
        Scalper<span className="text-primary">Master.io</span>
      </Link>

      <ModeToggle />
    </nav>
  );
}
