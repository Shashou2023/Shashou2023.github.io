
import React from 'react';

export default function Footer() {
  return (
    <footer className=" text-gray-800" id ="contacts" >
      

<div className="flex flex-wrap items-center  justify-center space-x-3  bg-gray-600 "  >

<h2 className="text-2xl font-bold mb-5 text-center"><span  className="text-yellow-400">Contacts</span> </h2>

<button
    type="button"
    data-te-ripple-init
    data-te-ripple-color="light"
    className=" bg-yellow-400 mb-5 -mt-10 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
   ><a href="tel:+237 222 234 020">
  <i class="fa fa-phone h-4 w-4" aria-hidden="true"></i></a>
  </button>


  <button
    type="button"
    data-te-ripple-init
    data-te-ripple-color="light"
    className=" bg-yellow-400 mb-5 -mt-10 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
   >
           <a
            href='https://web.facebook.com/hopicentral/?_rdc=1&_rdr'
            target='_blank'
            rel="noreferrer"
          >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24">
      <path
        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg></a>
  </button>

  <button
    type="button"
    data-te-ripple-init
    data-te-ripple-color="light"
    className=" bg-yellow-400 mb-5 -mt-10 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
 >
    
    <a
            href='https://mobile.twitter.com/CentralHopital'
            target='_blank'
            rel="noreferrer"
          ><svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24">
      <path
        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg></a>
  </button>
  
  <button
    type="button"
    data-te-ripple-init
    data-te-ripple-color="light"
    className="bg-yellow-400 mb-5 -mt-10 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
   ><a href='mailto:mail@hopitalcentralyaounde.cm' target='_blank' rel="noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24">
      <path
        d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
        fill-rule="evenodd"
        clip-rule="evenodd" />
    </svg></a>
  </button>
  </div>
  </footer>
  );
}

