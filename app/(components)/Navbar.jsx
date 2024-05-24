
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

  return (
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 light:bg-gray-800">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap light:text-white">AIRBUS</span>
        </Link>
        <div className="flex items-center lg:order-2">
          {pathname !== '/login' && (
            status === 'authenticated' ? (
              <button 
                onClick={() => signOut({ callbackUrl: '/' })} 
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 light:bg-primary-600 light:hover:bg-primary-700 focus:outline-none light:focus:ring-primary-800">
                Logout
              </button>
            ) : (
              <Link href="/login" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 light:bg-primary-600 light:hover:bg-primary-700 focus:outline-none light:focus:ring-primary-800">
                Log In
              </Link>
            )
          )}
        </div>
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {session?.user?.role === 'admin' && (
              <li>
                <Link href="/CreateUser" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Create User</Link>
              </li>
            )}
            {session?.user?.role === 'airline' && (
              <li>
                <Link href="/CreatePilot" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Create Pilot</Link>
              </li>
            )}
            
            {session?.user?.role === 'pilot' && (
              <li>
                <Link href="/PilotDashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Pilot Dashboard</Link>
              </li>
            )}
            {session?.user?.role === 'airline' && (
              <li>
                <Link href="/AirlineDashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Airline Dashboard</Link>
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
