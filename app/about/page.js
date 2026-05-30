export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        About World Explorer
      </h1>

      <p className="text-lg mb-4">
        World Explorer is a Next.js project that
        allows users to explore countries around
        the world using real API data.
      </p>

      <p className="text-lg mb-4">
        This project practices App Router,
        file-based routing, layouts, server
        components, client components, data
        fetching, caching, and dynamic routes.
      </p>

      <p className="text-lg">
        API Used: REST Countries API
      </p>
    </main>
  );
}