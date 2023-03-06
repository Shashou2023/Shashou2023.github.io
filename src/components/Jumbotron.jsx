/** @format */

import React from 'react';

export default function Jumbotron() {
  return (
  
    <div id="heading"
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
      style={{backgroundImage: "url('assets/img/banner2.jpg')", height: "400px"}}>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-semibold">Hopital Central de Yaounde</h2>
            <h4 className="mb-6 text-xl font-semibold">La Satisfaction du patient, notre Engagement</h4>
            <a href="tel:+237 222 234 020"><button
              type="button"
              className="rounded border-2 border-blue-500 px-7 pt-[10px] pb-[8px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light">
                <i class="fa fa-phone" aria-hidden="true"></i>
              Urgences
            </button></a>
          </div>
        </div>
      </div>
    </div>
 
  );
}
