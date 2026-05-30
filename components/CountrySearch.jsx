// use "use client" because it is a client component
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CountrySearch() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,cca3"
      );

      const data = await res.json();

      setCountries(data);
    }

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-3 rounded-lg mb-6"
      />

      <div className="space-y-3">
        {filteredCountries.map((country) => (
          <div
            key={country.cca3}
            className="bg-white p-4 rounded-lg shadow"
          >
            <Link
              href={`/countries/${country.cca3}`}
              className="text-blue-600 hover:underline"
            >
              {country.name.common}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}