// export default function AboutPage() {
//   return (
//     <main className="max-w-4xl mx-auto p-8">
//       <h1 className="text-4xl font-bold mb-6">
//         About World Explorer
//       </h1>

//       <p className="text-lg mb-4">
//         World Explorer is a Next.js project that
//         allows users to explore countries around
//         the world using real API data.
//       </p>

//       <p className="text-lg mb-4">
//         This project practices App Router,
//         file-based routing, layouts, server
//         components, client components, data
//         fetching, caching, and dynamic routes.
//       </p>

//       <p className="text-lg">
//         API Used: REST Countries API
//       </p>
//     </main>
//   );
// }


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-black px-6 py-20">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          About World Explorer
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg">
          A modern Next.js project for exploring countries around the world
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition">
          <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
            🌍 Project Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            World Explorer is a Next.js application that allows users to explore countries using real API data, including flags, capitals, population, and more.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition">
          <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
            ⚙️ Technologies Used
          </h2>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2">
            <li>• Next.js App Router</li>
            <li>• Server & Client Components</li>
            <li>• Tailwind CSS</li>
            <li>• REST Countries API</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition md:col-span-2">
          <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
            🚀 What I Learned
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            This project helped me understand routing, data fetching, caching, component architecture, and building real-world UI with Next.js and Tailwind CSS.
          </p>
        </div>

        {/* API Card */}
        <div className="bg-blue-600/10 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-800 rounded-2xl p-6 shadow-lg md:col-span-2">
          <h2 className="text-xl font-bold mb-3 text-blue-700 dark:text-cyan-400">
            🔌 API Used
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            REST Countries API — provides real-time country data including flags, population, currencies, and languages.
          </p>
        </div>

      </div>
    </main>
  );
}