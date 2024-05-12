import React from 'react'
import "../output.css";
import "../globals.css";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Navbar = async () => {
    const session = await getServerSession(options);
  return (
    <div>
       <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 light:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="" className="flex items-center">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
              <span className="self-center text-xl font-semibold whitespace-nowrap light:text-white">AIRBUS</span>
            </Link>
            <div className="flex items-center lg:order-2">
              {session ? (
            <Link href="/api/auth/signout?callbackUrl=/" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 light:bg-primary-600 light:hover:bg-primary-700 focus:outline-none light:focus:ring-primary-800">Logout</Link>
          ) : (
            <Link href="/api/auth/signin" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 light:bg-primary-600 light:hover:bg-primary-700 focus:outline-none light:focus:ring-primary-800">Log In</Link>
          )}
           
              
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                
                <li>
                  <Link href="/CreateUser" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Create User</Link>
                </li>
                <li>
                  <Link href="/CreatePilot" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Create Pilot</Link>
                </li>
                
                <li>
                  <Link href="/Member" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Member</Link>
                </li>
                <li>
                  <Link href="/PilotDashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Pilot Dashboard</Link>
                </li>
                <li>
                  <Link href="/AirlineDashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 light:text-gray-400 lg:light:hover:text-white light:hover:bg-gray-700 light:hover:text-white lg:light:hover:bg-transparent light:border-gray-700">Airline Dashboard</Link>
                </li>
              
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
