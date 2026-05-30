import Image from "next/image";
import Link from "next/link";
// import DarkModeToggle from "./DarkModeToggle";

export default function CountryCard({ country }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <Image
        src={country.flags.png}
        alt={country.name.common}
        width={400}
        height={250}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-4">
          {country.name.common}
        </h2>

        <div className="space-y-2 text-gray-700 dark:text-gray-200">
          <p>
            <span className="font-semibold">
              Capital:
            </span>{" "}
            {country.capital?.[0] || "No capital"}
          </p>

          <p>
            <span className="font-semibold">
              Region:
            </span>{" "}
            {country.region}
          </p>

          <p>
            <span className="font-semibold">
              Population:
            </span>{" "}
            {country.population.toLocaleString()}
          </p>
        </div>

        <Link
          href={`/countries/${country.cca3}`}
          className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}