import CountrySearch from "../../components/CountrySearch";

export default function SearchPage() {
  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Search Countries
      </h1>

      <CountrySearch />
    </main>
  );
}