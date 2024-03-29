import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { MenuDropDown } from "./Menu";

export default function Navbar() {
  return (
    <nav className="w-full relative flex flex-col items-center bg-gray-300 rounded-b-2xl dark:bg-slate-800">
      <div className="w-full flex justify-between items-center px-4 py-5">
        <MenuDropDown />
        <div className="flex items-center mx-auto">
          <Link href="/" className="font-bold text-3xl">
            <span className="text-gray-600 dark:text-white">Beanie&apos;s</span><span className="text-primary max-w-2xl mx-auto">Blog</span>
          </Link>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
