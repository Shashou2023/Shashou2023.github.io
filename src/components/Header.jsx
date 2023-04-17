/** @format */

import React, {useState} from 'react';
import {Link} from 'react-scroll';

function Header() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

return( 
 <nav
  className="flex-no-wrap sticky top-0 z-30 flex w-full items-center justify-between bg-neutral-100 py-4 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start"
  data-te-navbar-ref>
  <div className="flex w-full flex-wrap items-center justify-between px-6">
    <button
      className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent1"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd" />
        </svg>
      </span>
    </button>
    <div
      className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent1"
      data-te-collapse-item>
  <div className="flex items-center flex-shrink-0 text-black mr-6">
  <img
            src="/assets/img/logo.jpg"
            className="rounded-full"
            style={{height: "40px", width: "40px"}}
            alt=""
            loading="lazy" />
    <span className="font-semibold text-xl tracking-tight">HCY</span>
  </div>
   
  <ul
        className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
        data-te-navbar-nav-ref>
        <li className="lg:pr-2  nav-item">
          <Link
          to="heading"
          spy={true} smooth={true} offset={-50} duration={700} onClick={closeMenu}
            className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
            href="#heading"
            data-te-nav-link-ref
            >Acceuil</Link>
        </li>
        <li className="lg:pr-2   nav-item">
          <Link
          to="services"
          spy={true} smooth={true} offset={-50} duration={700} onClick={closeMenu}          
            className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
            href="#services"
            data-te-nav-link-ref
            >Services</Link >
        </li>


        <li className="lg:pr-2   nav-item">
          <Link
          to="patient"
          spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}          
            className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
            href="#patient"
            data-te-nav-link-ref
            >Patients </Link >
        </li>

        <li className="lg:pr-2  nav-item">
          <Link
          to="tarifs"
          spy={true} smooth={true} offset={50} duration={700} onClick={closeMenu}          
            className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
            href="#tarifs"
            data-te-nav-link-ref
            >Tarification</Link >
        </li>


        <li className="lg:pr-2  nav-item">
          <Link
          to="team"
          spy={true} smooth={true} offset={50} duration={700} onClick={closeMenu}          
            className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
            href="#team"
            data-te-nav-link-ref
            >Contacts</Link >
        </li>
      </ul>
    
    
    </div>
    <div className="relative" data-te-dropdown-ref>
    
        <a href="#">   <button
      type="button"
      className="inline-block rounded-full bg-yellow-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
      Prendre RDV
    </button>
        </a>
   
      </div>
 
  </div>
</nav>
)
}
  


export default Header;
