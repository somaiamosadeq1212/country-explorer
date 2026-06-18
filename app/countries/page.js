// import CountryCard from "../../components/CountryCard";
// // This page can be statically rendered and cached.

// export default async function CountriesPage() {
//   const res = await fetch(
//     "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3",
//     {
//       cache: "force-cache",
//     }
//   );

//   const countries = await res.json();
//   console.log(countries);

//   return (
//     <main className="max-w-7xl mx-auto p-8">
//       <h1 className="text-4xl font-bold mb-8 text-center">
//         Explore Countries
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {countries.slice(0, 20).map((country) => (
//           <CountryCard
//             key={country.cca3}
//             country={country}
//           />
//         ))}
//       </div>
//     </main>
//   );
// }


import CountryCard from "../../components/CountryCard";
import CountriesToolbar from "../../components/CountriesToolbar";

export default async function CountriesPage({
  searchParams,
}) {
  const params = await searchParams;

  const search =
    params.search?.toLowerCase() || "";

  const region =
    params.region || "";

  const sort =
    params.sort || "";

  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3"
  );

  const countries = await res.json();

  let filteredCountries =
    countries.filter((country) => {
      const matchesSearch =
        country.name.common
          .toLowerCase()
          .includes(search);

      const matchesRegion =
        region === "" ||
        country.region === region;

      return (
        matchesSearch &&
        matchesRegion
      );
    });

  filteredCountries.sort((a, b) => {
    switch (sort) {
      case "name-asc":
        return a.name.common.localeCompare(
          b.name.common
        );

      case "name-desc":
        return b.name.common.localeCompare(
          a.name.common
        );

      case "population-asc":
        return a.population - b.population;

      case "population-desc":
        return b.population - a.population;

      default:
        return 0;
    }
  });

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Explore Countries
      </h1>

      <CountriesToolbar />

      <p className="mb-6 text-gray-500">
        {filteredCountries.length} countries
        found
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCountries.map(
          (country) => (
            <CountryCard
              key={country.cca3}
              country={country}
            />
          )
        )}
      </div>
    </main>
  );
}