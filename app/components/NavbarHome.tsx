import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { MenuDropDown } from "./Menu";

export default function NavbarHome() {
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
      <div className="flex justify-between gap-3">
      <Link href="/blog" className="underline dark:text-white transform transition duration-500 hover:scale-110 text-gray-600 hover:font-bold   text-md pb-3">
          <span className="hover:text-primary">Blog</span>
        </Link>
        <Link href="/about" className="underline dark:text-white transform transition duration-500 hover:scale-110 text-gray-600 hover:font-bold   text-md pb-3">
          <span className="hover:text-primary">About me</span>
        </Link>
      </div>
    </nav>
  );
}
