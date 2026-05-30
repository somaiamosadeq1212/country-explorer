import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white transition-colors duration-500">
      <div className="text-center max-w-3xl px-6">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 shadow backdrop-blur">
          🌍 Discover the World
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
          World Explorer
        </h1>

        <p className="text-xl leading-8 mb-10 text-gray-700 dark:text-gray-300">
          Explore countries around the world and
          learn about their flags, capitals,
          populations, currencies, languages,
          and much more.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/countries"
            className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-lg"
          >
            Explore Countries
          </Link>

          <Link
            href="/search"
            className="bg-white/80 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-8 py-4 rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition duration-300 shadow-lg"
          >
            Search Countries
          </Link>
        </div>
      </div>
    </main>
  );
}