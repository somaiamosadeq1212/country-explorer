import CountryCard from "../../components/CountryCard";
// This page can be statically rendered and cached.

export default async function CountriesPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3",
    {
      cache: "force-cache",
    }
  );

  const countries = await res.json();
  console.log(countries);

  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Explore Countries
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries.slice(0, 20).map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </main>
  );
}