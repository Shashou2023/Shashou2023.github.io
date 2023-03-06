
import React from 'react';

function Assurances() {
  return (
   
    <section className="bg-white py-5 lg:py-[120px]" id="assurances">
   
      <h2 class="text-2xl font-bold mb-2 text-center">
      Plusieurs entreprises d'<span class="text-blue-600">Assurances</span> nous font confiance
    </h2>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="javascript:void(0)"
               className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img
                  src="assets/img/clients/axa.png"
                  alt="image"
                 className="h-20 w-full"
                />
              </a>
              <a
                href="javascript:void(0)"
               className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img
                  src="assets/img/clients/ascoma.png"
                  alt="image"
                 className="h-10 w-full"
                />
              </a>
              <a
                href="javascript:void(0)"
               className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img
                  src="assets/img/clients/nsia.jpg"
                  alt="image"
                 className="h-10 w-full"
                />
              </a>
              <a
                href="javascript:void(0)"
               className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img
                  src="assets/img/clients/chanas.png"
                  alt="image"
                 className="h-10 w-full"
                />
              </a>
              <a
                href="javascript:void(0)"
               className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img
                  src="assets/img/clients/atlantique.png"
                  alt="image"
                 className="h-10 w-full"
                />
              </a>
              <a
                href="javascript:void(0)"
               className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img
                  src="assets/img/clients/zenith.jpg"
                  alt="image"
                 className="h-10 w-full"
                />
              </a>
            </div>
          </div>
        </div>
     
    </section>
  
    
  );
}

export default Assurances;
