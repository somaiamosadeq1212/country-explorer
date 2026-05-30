import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-600 dark:bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          🌍 World Explorer
        </h1>

        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>

          <Link href="/countries">
            Countries
          </Link>

          <Link href="/search">
            Search
          </Link>

          <Link href="/about">
            About
          </Link>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}