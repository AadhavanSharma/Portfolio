// import {type Config} from 'tailwindcss'

// const config : Config = {
//   content: [
//       // './src/**/*.{js,ts,jsx,tsx}',
//       './pages/**/*.{js,ts,jsx,tsx}',
//       './components/**/*.{js,ts,jsx,tsx}',
//       './app/**/*.{js,ts,jsx,tsx}', // Include your app directory if using Next.js App Router
//       // Add other paths where you use Tailwind classes
//     ],
//     theme: {
      // extend: {
      //   fontFamily: {
      //       engtowne: ['English Towne', 'serif'],
      //     },
      // },
//     },
//     plugins: [
//       require('tailwind-scrollbar'),
//       require("tailwindcss-animate"),
//     ],
// }

// export default config

module.exports = {
      darkMode: 'class', // Enable dark mode based on the 'dark' class
      content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}', // Include your app directory if using Next.js App Router
        // Add other paths where you use Tailwind classes
      ],
      theme: {
        extend: {
          fontFamily: {
              engtowne: ['English Towne', 'serif'],
            },
          keyframes: {
            meteor: {
              "0%": { transform: "translateY(-20%) translateX(-50%)" },
              "100%": { transform: "translateY(300%) translateX(-50%)" },
            },
          },
          animation: {
            meteor: "meteor var(--duration,5s) var(--delay,5s) ease-in-out infinite",
          },
        },
        },
        plugins: [
          require('tailwind-scrollbar'),
          require("tailwindcss-animate"),
        ],
      };
      
      



      // extend: {
        //           keyframes: {
//             "bg-position": {
//               "0%": { backgroundPosition: "0% 50%" },
//               "100%": { backgroundPosition: "100% 50%" },
//             },
//           },
//           animation: {
//             "bg-position": "bg-position 3s infinite alternate",
//           },
//         },
