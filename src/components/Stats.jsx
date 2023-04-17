import React from 'react';

function Stats() {
  return (
    <section class="mb-3 text-gray-800 text-center" id="stats">
 <h2 class="text-2xl font-bold mb-5 text-center">
      Et nos <span class="text-blue-400">Statistiques</span> le confirment bien
    </h2>
    <div class="grid lg:gap-x-12 md:grid-cols-3" >
      <div class="mb-5 md:mb-0">
        <div class="p-4 bg-yellow-400 rounded-md shadow-lg inline-block mb-6">
        <span class="w-5 h-5">😄</span>
        </div>
        <h3 class="text-2xl font-bold text-blue-400 mb-4">80%</h3>
        <h5 class="text-lg font-medium text-gray-500">Taux annuel de fréquentation</h5>
      </div>

      <div class="mb-5 md:mb-0">
        <div class="p-4 bg-yellow-400 rounded-md shadow-lg inline-block mb-6">
        <i class="fa-solid fa-ranking-star w-5 h-5"></i>
        </div>
        <h3 class="text-2xl font-bold text-blue-400 mb-4">2</h3>
        <h5 class="text-lg font-medium text-gray-500">Rang national</h5>
      </div>

      <div class="mb-5 md:mb-0">
        <div class="p-4 bg-yellow-400 rounded-md shadow-lg inline-block mb-6">
        <i class="fas fa-award w-5 h-5"></i>
        </div>
        <h3 class="text-2xl font-bold text-blue-400 mb-4">40</h3>
        <h5 class="text-lg font-medium text-gray-500">Récompenses</h5>
      </div>
    </div>
  </section>
  );
}

export default Stats;
