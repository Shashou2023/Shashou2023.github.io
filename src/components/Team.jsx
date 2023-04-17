import React from 'react'

function Team() {
  return (
    <div className="bg-white py-24 sm:py-32" id="team">
  <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Rencontrez nos <span class="text-blue-400">dirigeants</span> </h2>
      </div>
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="assets/img/team/Prfouda.jpg" alt="team hopital central"/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Pr Fouda Pierre Joseph</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-400">Directeur</p>
          </div>
        </div>
      </li>

   
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="assets/img/team/Prongolo.jfif" alt="team hopital central"/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Pr Ongolo Zogo Pierre</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-400">Conseiller Medical</p>
          </div>
        </div>
      </li>

      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="assets/img/team/tsala.jpg" alt="team hopital central"/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">M. Tsala Belinga</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-400">Surveillant General 1</p>
          </div>
        </div>
      </li>

      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="assets/img/team/niwa.jpg" alt="team hopital central"/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Mme Niwa Agnes</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-400">Surveillant General 2</p>
          </div>
        </div>
      </li>

      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="assets/img/team/tchapda.jpg" alt="team hopital central"/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">M. Tchapda Richard</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-400">Surveillant General 3</p>
          </div>
        </div>
      </li>

      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="assets/img/team/afane.jpg" alt="team hopital central"/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Mme Afane</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-400">Chef de l'unité administrative</p>
          </div>
        </div>
      </li>

    </ul>
  </div>
</div>
  )
}

export default Team