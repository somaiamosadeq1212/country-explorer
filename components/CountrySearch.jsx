// "use client";

// import { useState } from "react";

// export default function CountrySearch({
//   search,
//   updateParam,
// }) {
//   const [focused, setFocused] = useState(false);

//   const clearSearch = () => {
//     updateParam("search", "");
//   };

//   return (
//     <div className="relative flex-1">
      
//       <input
//         type="text"
//         placeholder="Search countries..."
//         value={search}
//         onChange={(e) =>
//           updateParam("search", e.target.value)
//         }
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         className="
//           w-full
//           border
//           rounded-lg
//           p-3
//           pr-10
//           shadow-sm
//           bg-white
//           text-gray-900
//           placeholder:text-gray-500
//           dark:bg-gray-700
//           dark:text-white
//           dark:placeholder:text-gray-400
//           dark:border-gray-600
//           focus:outline-none
//           focus:ring-2
//           focus:ring-blue-500
//         "
//       />

//       {/* Clear button */}
//       {search && (
//         <button
//           onClick={clearSearch}
//           className="
//             absolute
//             right-3
//             top-1/2
//             -translate-y-1/2
//             text-gray-400
//             hover:text-red-500
//             text-lg
//             transition
//           "
//         >
//           ✕
//         </button>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";

export default function CountrySearch({
  search,
  updateParam,
}) {
  const [value, setValue] = useState(search);

  useEffect(() => {
    setValue(search);
  }, [search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value !== search) {
        updateParam("search", value);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [value, search, updateParam]);

  const clearSearch = () => {
    setValue("");
    updateParam("search", "");
  };

  return (
    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Search countries..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="
          w-full
          border
          rounded-lg
          p-3
          pr-10
          shadow-sm
        "
      />

      {value && (
        <button
          onClick={clearSearch}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-gray-400
            hover:text-red-500
          "
        >
          ✕
        </button>
      )}
    </div>
  );
}