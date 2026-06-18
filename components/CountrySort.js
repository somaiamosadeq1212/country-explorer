"use client";

export default function CountrySort({
  sort,
  updateParam,
}) {
  return (
    <select
      value={sort}
      onChange={(e) =>
        updateParam("sort", e.target.value)
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
dark:border-gray-600
"
    >
      <option value="">Sort By</option>

      <option value="name-asc">
        Name A-Z
      </option>

      <option value="name-desc">
        Name Z-A
      </option>

      <option value="population-asc">
        Population Low-High
      </option>

      <option value="population-desc">
        Population High-Low
      </option>
    </select>
  );
}