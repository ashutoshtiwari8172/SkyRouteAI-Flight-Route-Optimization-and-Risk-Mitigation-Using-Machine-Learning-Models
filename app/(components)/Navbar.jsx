"use client";

import React from 'react';
import Link from 'next/link';
import "../output.css";
import "../globals.css";
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();

    const contentStyle1 = {
    color: 'white',
    letterSpacing: '0.45rem',
    fontWeight: 220, // Reduced font weight by 60%
    textAlign: 'center', // Center align the text
    fontSize: '1rem', // Reduced font size to 1/3rd
    paddingTop: '1rem' // Added padding at the bottom

    
  };



  return (
    <nav className="absolute top-0 left-0 w-full z-50" style={{ backgroundColor: 'transparent' }}>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link href="/" className="flex items-center">
          <span style={contentStyle1}>ABOUT US</span>
        </Link>
        <div className="flex items-center lg:order-2">
          {pathname !== '/login' && (
            status === 'authenticated' ? (
              <button 
                onClick={() => signOut({ callbackUrl: '/' })} 
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none">
                Logout
              </button>
            ) : (
              <Link href="/login" style={contentStyle1}>
                CHECK IN
              </Link>
            )
          )}
        </div>
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {session?.user?.role === 'admin' && (
              <li>
                <Link href="/CreateUser" className="block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Create User</Link>
              </li>
            )}
            {session?.user?.role === 'airline' && (
              <li>
                <Link href="/CreatePilot" className="block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Create Pilot</Link>
              </li>
            )}
            
            {session?.user?.role === 'pilot' && (
              <li>
                <Link href="/PilotDashboard" className="block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Pilot Dashboard</Link>
              </li>
            )}
            {session?.user?.role === 'airline' && (
              <li>
                <Link href="/AirlineDashboard" className="block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Airline Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import "../output.css";
// import "../globals.css";
// import { useSession, signOut } from 'next-auth/react';
// import { usePathname } from 'next/navigation';

// const Navbar = () => {
//   const { data: session, status } = useSession();
//   const pathname = usePathname();
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY) {
//         setVisible(false); // Hide navbar when scrolling down
//       } else {
//         setVisible(true); // Show navbar when scrolling up
//       }
//       setLastScrollY(currentScrollY); // Update the last scroll position
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });

//     const contentStyle = {
//           color: 'white',
//           letterSpacing: '0.45rem',
//           fontWeight: 220, // Reduced font weight by 60%
//           textAlign: 'center', // Center align the text
//           fontSize: '1rem', // Reduced font size to 1/3rd
//           paddingTop: '1rem' // Added padding at the bottom
      
          
//         };

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <nav className={`absolute top-0 left-0 w-full z-50 ${visible ? 'bg-transparent' : 'bg-gray-800'} transition-bg duration-300 ease-in-out`}>
//       <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//         <Link href="/" className="flex items-center">
//           <span style={contentStyle}>ABOUT US</span>
//         </Link>
//         <div className="flex items-center lg:order-2">
//           {pathname !== '/login' && (
//             status === 'authenticated' ? (
//               <button 
//                 onClick={() => signOut({ callbackUrl: '/' })} 
//                 className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none">
//                 Logout
//               </button>
//             ) : (
//               <Link href="/login" style={contentStyle}>
//                 CHECK IN
//               </Link>
//             )
//           )}
//         </div>
//         <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
//           <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//             {session?.user?.role === 'admin' && (
//               <li>
//                 <Link href="/CreateUser" className="block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Create User</Link>
//               </li>
//             )}
//             {session?.user?.role === 'airline' && (
//               <li>
//                 <Link href="/CreatePilot" className="block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Create Pilot</Link>
//               </li>
//             )}
            
//             {session?.user?.role === 'pilot' && (
//               <li>
//                 <Link href="/PilotDashboard" className="block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Pilot Dashboard</Link>
//               </li>
//             )}
//             {session?.user?.role === 'airline' && (
//               <li>
//                 <Link href="/AirlineDashboard" className="block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Airline Dashboard</Link>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// //best corrected
// "use client";

// import React from 'react';
// import Link from 'next/link';
// import "../output.css";
// import "../globals.css";
// import { useSession, signOut } from 'next-auth/react';
// import { usePathname } from 'next/navigation';

// const Navbar = () => {
//   const { data: session, status } = useSession();
//   const pathname = usePathname();

//     const contentStyle1 = {
//     color: 'white',
//     letterSpacing: '0.45rem',
//     fontWeight: 220, // Reduced font weight by 60%
//     textAlign: 'center', // Center align the text
//     fontSize: '1rem', // Reduced font size to 1/3rd
//     paddingTop: '1rem' // Added padding at the bottom

    
//   };



//   return (
//     <nav className="absolute top-0 left-0 w-full z-50" style={{ backgroundColor: 'transparent' }}>
//       <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//         <Link href="/" className="flex items-center">
//           <span style={contentStyle1}>ABOUT US</span>
//         </Link>
//         <div className="flex items-center lg:order-2">
//           {pathname !== '/login' && (
//             status === 'authenticated' ? (
//               <button 
//                 onClick={() => signOut({ callbackUrl: '/' })} 
//                 className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none">
//                 Logout
//               </button>
//             ) : (
//               <Link href="/login" style={contentStyle1}>
//                 CHECK IN
//               </Link>
//             )
//           )}
//         </div>
//         <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
//           <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//             {session?.user?.role === 'admin' && (
//               <li>
//                 <Link href="/CreateUser" className="block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Create User</Link>
//               </li>
//             )}
//             {session?.user?.role === 'airline' && (
//               <li>
//                 <Link href="/CreatePilot" className="block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Create Pilot</Link>
//               </li>
//             )}
            
//             {session?.user?.role === 'pilot' && (
//               <li>
//                 <Link href="/PilotDashboard" className="block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Pilot Dashboard</Link>
//               </li>
//             )}
//             {session?.user?.role === 'airline' && (
//               <li>
//                 <Link href="/AirlineDashboard" className="block py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Airline Dashboard</Link>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// original revert
// "use client";

// import React from 'react';
// import Link from 'next/link';
// import "../output.css";
// import "../globals.css";
// import { useSession, signOut } from 'next-auth/react';
// import { usePathname } from 'next/navigation';

// const Navbar = () => {
//   const { data: session, status } = useSession();
//   const pathname = usePathname();

//   return (
//     <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 light:bg-gray-800">
//       <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//         <Link href="/" className="flex items-center">
//           <span className="self-center text-xl font-semibold whitespace-nowrap light:text-white">AIRBUS</span>
//         </Link>
//         <div className="flex items-center lg:order-2">
//           {pathname !== '/login' && (
//             status === 'authenticated' ? (
//               <button 
//                 onClick={() => signOut({ callbackUrl: '/' })} 
//                 className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 light:bg-primary-600 light:hover:bg-primary-700 focus:outline-none light:focus:ring-primary-800">
//                 Logout
//               </button>
//             ) : (
//               <Link href="/login" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 light:bg-primary-600 light:hover:bg-primary-700 focus:outline-none light:focus:ring-primary-800">
//                 Log In
//               </Link>
//             )
//           )}
//         </div>
//         <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
//           <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//             {session?.user?.role === 'admin' && (
//               <li>
//                 <Link href="/CreateUser" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Create User</Link>
//               </li>
//             )}
//             {session?.user?.role === 'airline' && (
//               <li>
//                 <Link href="/CreatePilot" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Create Pilot</Link>
//               </li>
//             )}
            
//             {session?.user?.role === 'pilot' && (
//               <li>
//                 <Link href="/PilotDashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Pilot Dashboard</Link>
//               </li>
//             )}
//             {session?.user?.role === 'airline' && (
//               <li>
//                 <Link href="/AirlineDashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Airline Dashboard</Link>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// //bestest
// "use client";

// import React from 'react';
// import Link from 'next/link';
// import "../output.css";
// import "../globals.css";
// import { useSession, signOut } from 'next-auth/react';
// import { usePathname } from 'next/navigation';

// const Navbar = () => {
//   const { data: session, status } = useSession();
//   const pathname = usePathname();

//   const contentStyle = {
//     color: 'white',
//     letterSpacing: '0.45rem',
//     fontWeight: 220, // Reduced font weight by 60%
//     textAlign: 'center', // Center align the text
//     fontSize: '1rem', // Reduced font size to 1/3rd
//     paddingTop: '1rem' // Added padding at the bottom

    
//   };

//   const contentStyle1 = {
//     color: 'white',
//     letterSpacing: '0.40rem',
//     fontWeight: 220, // Reduced font weight by 60%
//     textAlign: 'center', // Center align the text
//     fontSize: '1rem', // Reduced font size to 1/3rd
//     paddingTop: '1rem' // Added padding at the bottom

    
//   };

//   return (
//     <nav className="bg-transparent absolute top-0 left-0 w-full z-10">
//       <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//         <Link href="/" className="flex items-center">
//           <span style={contentStyle}>ABOUT US</span>
//         </Link>
//         <div className="flex items-center lg:order-2">
//           {pathname !== '/login' && (
//             status === 'authenticated' ? (
//               <button 
//                 onClick={() => signOut({ callbackUrl: '/' })} 
//                 className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 light:bg-primary-600 light:hover:bg-primary-700 focus:outline-none light:focus:ring-primary-800">
//                 Logout
//               </button>
//             ) : (
//               <Link href="/login" style={contentStyle1} >
//                 CHECK IN 
//                 {/* GET LOGGED */}
//               </Link>
//             )
//           )}
//         </div>
//         <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
//           <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//             {session?.user?.role === 'admin' && (
//               <li>
//                 <Link href="/CreateUser" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Create User</Link>
//               </li>
//             )}
//             {session?.user?.role === 'airline' && (
//               <li>
//                 <Link href="/CreatePilot" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Create Pilot</Link>
//               </li>
//             )}
//             {session?.user?.role === 'pilot' && (
//               <li>
//                 <Link href="/PilotDashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Pilot Dashboard</Link>
//               </li>
//             )}
//             {session?.user?.role === 'airline' && (
//               <li>
//                 <Link href="/AirlineDashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Airline Dashboard</Link>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// // "use client";

// // import React from 'react';
// // import Link from 'next/link';
// // import { useSession, signOut } from 'next-auth/react';
// // import { usePathname } from 'next/navigation';

// // const Navbar = () => {
// //   const { data: session, status } = useSession();
// //   const pathname = usePathname();

// //   const underlineAnimation = {
// //     position: 'absolute',
// //     left: 0,
// //     bottom: '-2px',
// //     width: 0,
// //     height: '2px',
// //     backgroundColor: '#333',
// //     transition: 'width 0.3s ease'
// //   };

// //   const linkHoverStyle = {
// //     width: '100%'
// //   };

// //   return (
// //     <nav className="bg-transparent absolute top-0 left-0 w-full z-10">
// //       <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
// //         <Link href="/" className="flex items-center relative" style={{ textDecoration: 'none', color: 'white', letterSpacing: '0.45rem', fontWeight: 220, textAlign: 'center', fontSize: '1rem', paddingTop: '1rem' }}>
// //           ABOUT US
// //           <div className="underline-animation" style={underlineAnimation}></div>
// //         </Link>
// //         <div className="flex items-center lg:order-2">
// //           {pathname !== '/login' && (
// //             status === 'authenticated' ? (
// //               <button 
// //                 onClick={() => signOut({ callbackUrl: '/' })} 
// //                 className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 light:bg-primary-600 light:hover:bg-primary-700 focus:outline-none light:focus:ring-primary-800">
// //                 Logout
// //               </button>
// //             ) : (
// //               <Link href="/login" className="relative" style={{ textDecoration: 'none', color: 'white', letterSpacing: '0.40rem', fontWeight: 220, textAlign: 'center', fontSize: '1rem', paddingTop: '1rem' }}>
// //                 CHECK IN 
// //                 <div className="underline-animation" style={underlineAnimation}></div>
// //               </Link>
// //             )
// //           )}
// //         </div>
// //         <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
// //           <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
// //             {session?.user?.role === 'admin' && (
// //               <li>
// //                 <Link href="/CreateUser" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700 relative" style={{ textDecoration: 'none', color: 'white', letterSpacing: '0.45rem', fontWeight: 220, textAlign: 'center', fontSize: '1rem', paddingTop: '1rem' }}>
// //                   Create User
// //                   <div className="underline-animation" style={underlineAnimation}></div>
// //                 </Link>
// //               </li>
// //             )}
// //             {session?.user?.role === 'airline' && (
// //               <li>
// //                 <Link href="/CreatePilot" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700 relative" style={{ textDecoration: 'none', color: 'white', letterSpacing: '0.45rem', fontWeight: 220, textAlign: 'center', fontSize: '1rem', paddingTop: '1rem' }}>
// //                   Create Pilot
// //                   <div className="underline-animation" style={underlineAnimation}></div>
// //                 </Link>
// //               </li>
// //             )}
// //             {session?.user?.role === 'pilot' && (
// //               <li>
// //                 <Link href="/PilotDashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700 relative" style={{ textDecoration: 'none', color: 'white', letterSpacing: '0.45rem', fontWeight: 220, textAlign: 'center', fontSize: '1rem', paddingTop: '1rem' }}>
// //                   Pilot Dashboard
// //                   <div className="underline-animation" style={underlineAnimation}></div>
// //                 </Link>
// //               </li>
// //             )}
// //             {session?.user?.role === 'airline' && (
// //               <li>
// //                 <Link href="/AirlineDashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700 relative" style={{ textDecoration: 'none', color: 'white', letterSpacing: '0.45rem', fontWeight: 220, textAlign: 'center', fontSize: '1rem', paddingTop: '1rem' }}>
// //                   Airline Dashboard
// //                   <div className="underline-animation" style={underlineAnimation}></div>
// //                 </Link>
// //               </li>
// //             )}
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };




// // // nice enough only the font changed of login and about us
// // import React from 'react';
// // import Link from 'next/link';
// // import { useSession, signOut } from 'next-auth/react';
// // import { usePathname } from 'next/navigation';



// // const Navbar = () => {
// //   const { data: session, status } = useSession();
// //   const pathname = usePathname();

  

// //   return (
// //     <nav className="bg-transparent absolute top-0 left-0 w-full z-10">
// //       <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
// //         <Link href="/" className="relative text-white inline-block p-4">
// //           ABOUT US
// //           <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-width duration-300 ease-in-out origin-left"></div>
// //         </Link>
// //         <div className="flex items-center lg:order-2">
// //           {pathname !== '/login' && (
// //             status === 'authenticated' ? (
// //               <button 
// //                 onClick={() => signOut({ callbackUrl: '/' })} 
// //                 className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 light:bg-primary-600 light:hover:bg-primary-700 focus:outline-none light:focus:ring-primary-800">
// //                 Logout
// //               </button>
// //             ) : (
// //               <Link href="/login" className="relative text-white inline-block p-4">
// //                 CHECK IN 
// //                 <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-width duration-300 ease-in-out origin-left"></div>
// //               </Link>
// //             )
// //           )}
// //         </div>
// //         {/* Other links */}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
