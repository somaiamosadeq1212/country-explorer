

// import Link from "next/link";



// export default function HomePage() {
//   return (
//     <main
//       className="
//         relative
//     min-h-screen
//     -mt-20
//     flex
//     items-center
//     justify-center
//     bg-cover
//     bg-center
//       "
//       style={{
//         backgroundImage:
//           "url('images/world-bg.jpg')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Content */}
//       <div className="relative z-10 text-center max-w-4xl px-6">
//         <div
//           className="
//             inline-block
//             mb-6
//             px-5
//             py-2
//             rounded-full
//             bg-white/10
//             backdrop-blur-md
//             border
//             border-white/20
//             text-white
//           "
//         >
//           🌎 Explore Every Country
//         </div>

//         <h1
//           className="
//             text-6xl
//             md:text-8xl
//             font-extrabold
//             text-white
//             mb-6
//           "
//         >
//           World Explorer
//         </h1>

//         <p
//           className="
//             text-xl
//             md:text-2xl
//             text-gray-200
//             leading-relaxed
//             mb-10
//           "
//         >
//           Discover countries, flags, capitals,
//           populations, currencies and cultures
//           from around the world.
//         </p>

//         <div className="flex justify-center gap-5 flex-wrap">
//           <Link
//             href="/countries"
//             className="
//               bg-blue-600
//               hover:bg-blue-700
//               text-white
//               px-8
//               py-4
//               rounded-2xl
//               font-semibold
//               shadow-xl
//               hover:scale-105
//               transition
//             "
//           >
//             Explore Countries
//           </Link>

//           <Link
//             href="/countries"
//             className="
//               bg-white/10
//               backdrop-blur-md
//               border
//               border-white/20
//               text-white
//               px-8
//               py-4
//               rounded-2xl
//               hover:bg-white/20
//               transition
//             "
//           >
//             Search Countries
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }


import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: "url('/images/world-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
          🌎 Explore Every Country
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6">
          World Explorer
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10">
          Discover countries, flags, capitals, populations and cultures from around the world.
        </p>

        <div className="flex justify-center gap-5 flex-wrap">
          <Link
            href="/countries"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition"
          >
            Explore Countries
          </Link>

          <Link
            href="/countries"
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl hover:bg-white/20 transition"
          >
            Search Countries
          </Link>
        </div>
      </div>
    </main>
  );
}


// import Link from "next/link";
// export default function HomePage() {
//   return (
//     <main
//       className="
//         relative
//         min-h-screen
//         flex
//         items-center
//         justify-center
//         bg-cover
//         bg-center
//       "
//       style={{
//         backgroundImage: "url('/images/world-bg.jpg')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Content */}
//       <div className="relative z-10 text-center max-w-4xl px-6">
//         <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
//           🌎 Explore Every Country
//         </div>

//         <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6">
//           World Explorer
//         </h1>

//         <p className="text-xl md:text-2xl text-gray-200 mb-10">
//           Discover countries, flags, capitals, populations and cultures.
//         </p>

//         <div className="flex justify-center gap-5 flex-wrap">
//           <Link className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition">
//             Explore Countries
//           </Link>

//           <Link className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl hover:bg-white/20 transition">
//             Search Countries
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }