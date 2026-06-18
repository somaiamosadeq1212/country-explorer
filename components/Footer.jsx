// export default function Footer() {
//   return (
//     <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center p-5 text-gray-600 dark:text-gray-300 transition-colors duration-300">
//       <p>
//         © 2026 World Explorer • Built with
//         Next.js
//       </p>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 text-center py-6 text-gray-600 dark:text-gray-300 transition-colors">
      <p className="text-sm">
        © 2026 <span className="font-semibold text-gray-800 dark:text-white">World Explorer</span> • Built with Next.js
      </p>
    </footer>
  );
}