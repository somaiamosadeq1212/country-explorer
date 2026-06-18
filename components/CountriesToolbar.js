"use client";

import { useRouter, useSearchParams } from "next/navigation";

import CountrySearch from "./CountrySearch";
import CountryFilter from "./CountryFilter";
import CountrySort from "./CountrySort";

export default function CountriesToolbar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search =
    searchParams.get("search") || "";

  const region =
    searchParams.get("region") || "";

  const sort =
    searchParams.get("sort") || "";

  const updateParam = (key, value) => {
    const params = new URLSearchParams(
      searchParams
    );

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.replace(
      `/countries?${params.toString()}`
    );
  };

  return (
    <div className="
bg-gray-50
dark:bg-gray-800
border
dark:border-gray-700
p-6
rounded-xl
shadow
mb-8
">
      <div className="flex flex-col md:flex-row gap-4">
        <CountrySearch
          search={search}
          updateParam={updateParam}
        />

        <CountryFilter
          region={region}
          updateParam={updateParam}
        />

        <CountrySort
          sort={sort}
          updateParam={updateParam}
        />
      </div>
    </div>
  );
}