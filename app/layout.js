// import "./globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export const metadata = {
//   title: "World Explorer",
//   description:
//     "A Next.js country explorer project for Week 13 and Week 14",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="min-h-screen flex flex-col">
//         <Navbar />

//         <main
//   className="relative min-h-screen ..."
//   style={{
//     marginTop: "-5rem",
//   }}
// >
//           {children}
//         </main>

//         <Footer />
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "World Explorer",
  description: "A Next.js country explorer project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors">
        <Navbar />

        {/* مهم: بدون margin و بدون hack */}
        <main className="flex-grow pt-19">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}