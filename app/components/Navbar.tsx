import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { MenuDropDown } from "./Menu";
export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between px-4 py-5 bg-gray-300 rounded-b-2xl dark:bg-slate-800">
      <MenuDropDown />

      <div className="flex items-center mx-auto">
        <Link href="/" className="font-bold text-3xl">
          <span className="text-gray-600 dark:text-white">Beanie's</span><span className="text-primary max-w-2xl mx-auto">Blog</span>
        </Link>
      </div>
      <ModeToggle />
    </nav>
  );
}
