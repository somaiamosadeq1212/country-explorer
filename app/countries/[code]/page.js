import Image from "next/image";
import Link from "next/link";

// This page fetches fresh data every time.

export default async function CountryDetailsPage({
  params,
}) {
  const { code } = await params;

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  const country = data[0];

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "No languages";

  const currencies = country.currencies
    ? Object.values(country.currencies)
      .map((currency) => currency.name)
      .join(", ")
    : "No currencies";

  return (
    <main className="max-w-5xl mx-auto p-8 min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <Link
        href="/countries"
        className="inline-block mb-6 bg-gray-200 dark:bg-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        ← Back
      </Link>

      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden p-8 transition-colors duration-300">
        <Image
          src={country.flags.png}
          alt={country.name.common}
          width={700}
          height={400}
          className="w-full h-80 object-cover rounded-xl mb-8"
        />

        <h1 className="text-5xl font-bold mb-6 dark:text-white">
          {country.name.common}
        </h1>

        <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-800 dark:text-gray-200">
          <p>
            <strong>Official Name:</strong>{" "}
            {country.name.official}
          </p>

          <p>
            <strong>Capital:</strong>{" "}
            {country.capital?.[0]}
          </p>

          <p>
            <strong>Region:</strong>{" "}
            {country.region}
          </p>

          <p>
            <strong>Subregion:</strong>{" "}
            {country.subregion}
          </p>

          <p>
            <strong>Population:</strong>{" "}
            {country.population.toLocaleString()}
          </p>

          <p>
            <strong>Languages:</strong>{" "}
            {languages}
          </p>

          <p>
            <strong>Currencies:</strong>{" "}
            {currencies}
          </p>

          <p>
            <strong>Time Zones:</strong>{" "}
            {country.timezones.join(", ")}
          </p>
        </div>

        <a
          href={country.maps.googleMaps}
          target="_blank"
          className="inline-block mt-8 bg-green-600 text-white px-6 py-3 
          rounded-lg hover:bg-green-700 transition"
        >
          View on Google Maps
        </a>
      </div>
    </main>
  );
}