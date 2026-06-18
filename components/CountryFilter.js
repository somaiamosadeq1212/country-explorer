"use client";

export default function CountryFilter({
  region,
  updateParam,
}) {
  return (
    <select
      value={region}
      onChange={(e) =>
        updateParam("region", e.target.value)
      }
      className="
border
rounded-lg
p-3
shadow-sm
bg-white
text-gray-900
dark:bg-gray-700
dark:text-white
dark:border-gray-600"
    >
      <option value="">All Regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}