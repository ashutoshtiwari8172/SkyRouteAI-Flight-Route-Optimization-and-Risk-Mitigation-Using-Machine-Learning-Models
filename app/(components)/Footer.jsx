import React from 'react'
import "../output.css";
import "../globals.css";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-gray-50 sm:p-6 light:bg-gray-800">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap light:text-white">AIRBUS</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase light:text-white">Resources</h2>
                <ul className="text-gray-600 light:text-gray-400">
                  <li className="mb-4">
                    <a href="https://flowbite.com" className="hover:underline">AIRBUS</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase light:text-white">Follow us</h2>
                <ul className="text-gray-600 light:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">Github</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Discord</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase light:text-white">Legal</h2>
                <ul className="text-gray-600 light:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto light:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center light:text-gray-400">© 2022 <a href="#" className="hover:underline">AIRBUS™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 light:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 light:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 light:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12s4.477 10 10 10 10-4.484 10-10S17.523 2 12 2zm5.338 17.83H6.662a7.178 7.178 0 01-.068-.84c0-2.057.878-3.896 2.337-5.196-1.034-1.217-1.683-2.857-1.683-4.636 0-3.64 2.928-6.602 6.532-6.602 3.605 0 6.533 2.962 6.533 6.602 0 1.78-.648 3.42-1.683 4.636 1.459 1.3 2.336 3.139 2.336 5.196 0 .297-.024.581-.067.84zM12 7.667a4.352 4.352 0 00-4.333 4.335A4.352 4.352 0 0012 16.335a4.352 4.352 0 004.333-4.333A4.352 4.352 0 0012 7.667zm5.296 10.482a.552.552 0 00-.552.552.553.553 0 00.552.553.553.553 0 00.552-.553.553.553 0 00-.552-.552zM16.556 12c0 1.35-1.1 2.445-2.445 2.445a2.452 2.452 0 01-2.446-2.445A2.453 2.453 0 0114.111 9.555 2.451 2.451 0 0116.556 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 light:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12s4.477 10 10 10 10-4.484 10-10S17.523 2 12 2zm4.9 15.535h-1.616v-5.03h1.616v5.03zm-4.75-6.79c-.22 0-.443.02-.665.055-.222.036-.438.087-.65.155a3.757 3.757 0 00-.613.254 3.67 3.67 0 00-.538.379 3.715 3.715 0 00-.495.46c-.139.173-.267.36-.38.562-.118.208-.213.425-.283.648a4.208 4.208 0 00-.124.944c0 .174-.01.348-.01.522v.333h-1.614v-.443c0-.148.005-.308.01-.48.005-.172.024-.34.06-.507.036-.165.087-.32.155-.467a3.74 3.74 0 00.254-.613c.069-.207.154-.402.254-.587a4.05 4.05 0 00.38-.562 4.27 4.27 0 00.46-.65c.139-.24.26-.488.366-.748.103-.266.192-.547.267-.84.068-.293.12-.593.155-.902.036-.315.055-.635.055-.964 0-.172-.005-.348-.01-.528a7.58 7.58 0 00-.01-.157v-.18h1.616v.166c0 .276-.005.537-.01.782 0 .242-.024.473-.073.69-.045.224-.12.443-.213.655a3.866 3.866 0 01-.344.65 3.73 3.73 0 01-.46.627c-.188.224-.39.437-.613.638a4.1 4.1 0 01-.708.483 4.134 4.134 0 01-.757.277c-.256.06-.493.09-.708.09a7.63 7.63 0 01-1.88-.237 6.882 6.882 0 01-1.635-.687c-.502-.322-.948-.737-1.338-1.244a5.01 5.01 0 01-.825-1.77c-.191-.695-.286-1.5-.286-2.417s.095-1.722.286-2.417a5.01 5.01 0 01.825-1.77c.39-.507.836-.922 1.338-1.244a6.882 6.882 0 011.635-.687c.622-.2 1.292-.3 2.01-.3.172 0 .349.005.528.01.174.005.348.01.528.01.222 0 .443-.005.665-.005s.443.005.665.005c.276 0 .537-.01.782-.01.242 0 .473-.024.69-.073.224-.045.443-.12.655-.213.207-.083.407-.177.593-.28a3.666 3.666 0 00.653-.344 3.73 3.73 0 00.627-.46c.224-.188.437-.39.638-.613a4.1 4.1 0 00.483-.708c.09-.256.134-.502.134-.732 0-.22-.044-.467-.134-.748-.06-.27-.148-.516-.267-.74a3.738 3.738 0 00-.366-.748 3.947 3.947 0 00-.46-.65c-.208-.224-.43-.43-.653-.628a3.712 3.712 0 00-.69-.344c-.215-.097-.437-.192-.655-.283-.216-.083-.422-.148-.613-.213-.207-.069-.405-.124-.593-.169-.223-.041-.447-.061-.672-.061zm-1.616-6.59H8.968v2.934h1.616V8.034zm-3.232 9.54h1.616v5.03H8.352v-5.03zm-1.617-6.595H6.735v2.934h1.616v-2.934zm-1.616-6.58H5.12v2.934h1.617V8.034zm0-4.6H6.64v2.934H5.12V3.434z" clipRule="evenodd"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
