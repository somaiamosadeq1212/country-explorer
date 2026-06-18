"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href) =>
    `transition font-medium
    ${
      pathname === href
        ? "text-blue-600 dark:text-cyan-400"
        : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-extrabold text-blue-700 dark:text-cyan-400 drop-shadow-sm">
  🌍 World Explorer
</h1>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/countries" className={linkClass("/countries")}>Countries</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}


// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import DarkModeToggle from "./DarkModeToggle";

// export default function Navbar() {
//   const pathname = usePathname();

//   const navLink = (href) =>
//     `relative pb-1 transition-colors duration-200
//     ${
//       pathname === href
//         ? "text-blue-600 dark:text-cyan-400 font-semibold"
//         : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400"
//     }`;

//   return (
//     <nav
//       className="
//         fixed
//         top-0
//         w-full
//         z-50
//         bg-white/80
//         dark:bg-gray-900/90
//         backdrop-blur-md
//         border-b
//         border-gray-200
//         dark:border-gray-800
//         shadow-sm
//       "
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         <Link href="/">
//           <h1
//             className="
//               text-2xl
//               font-extrabold
//               bg-gradient-to-r
//               from-blue-600
//               to-cyan-500
//               bg-clip-text
//               text-transparent
//             "
//           >
//             🌍 World Explorer
//           </h1>
//         </Link>

//         <div className="flex items-center gap-6">
//           <Link href="/" className={navLink("/")}>
//             Home
//           </Link>

//           <Link
//             href="/countries"
//             className={navLink("/countries")}
//           >
//             Countries
//           </Link>

//           <Link
//             href="/countries"
//             className={navLink("/countries")}
//           >
//             Search
//           </Link>

//           <Link
//             href="/about"
//             className={navLink("/about")}
//           >
//             About
//           </Link>

//           <DarkModeToggle />
//         </div>
//       </div>
//     </nav>
//   );
// }