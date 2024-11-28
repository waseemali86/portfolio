import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  return (
    <nav className="w-full h-14 bg-slate-100 md:max-w-7xl cursor-pointer select-none flex justify-between px-6  md:px-6 md:mt-1 md:flex md:justify-between items-center">
      <div>
        <h1 className="text-orange-600 text-2xl font-bold hover:text-neutral-900  md:hover:text-neutral-900">
          Waseem.
        </h1>
      </div>
      <ul className="hidden md:flex md:gap-12 md:text-orange-400 md:text-lg">
        <li className="md:hover:text-neutral-900 md:hover:text-xl">
          <Link href="/">Home</Link>
        </li>
        <li className="md:hover:text-neutral-900 md:hover:text-xl">
          <Link href="/about">About</Link>
        </li>
        <li className="md:hover:text-neutral-900 md:hover:text-xl">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hidden md:flex">
        <button className="md:bg-orange-500 md:hover:bg-neutral-900 md:rounded-full md:px-5 md:py-2 md:text-sm md:text-white md:mr-2">
          Connect
        </button>
      </div>
      <div className="md:hidden text-orange-500">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-4xl py-10 bg-slate-200 cursor-pointer hover:text-orange-500 rounded-xl ">Waseem Ali</SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col gap-12 text-orange-400 text-3xl bg-slate-200 py-6 rounded-xl">
                  <li className="hover:bg-neutral-900 hover:text-white bg-slate-200 py-3 rounded-lg hover:rounded-xl">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:bg-neutral-900 hover:text-white bg-slate-200 py-3 rounded-lg hover:rounded-xl">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="hover:bg-neutral-900 hover:text-white bg-slate-200 py-3 rounded-lg hover:rounded-xl">
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li className="hover:bg-neutral-900 hover:text-white bg-slate-200 py-3 rounded-lg hover:rounded-xl">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
export default Header;
