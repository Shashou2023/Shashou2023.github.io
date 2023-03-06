import React from 'react';


export default function FeatureServices() {


  return (
    <section className="mb-2 text-gray-800 text-center">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
      <div className="mb-2 lg:mb-0" >
        <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
        <i class="fa fa-plus-square w-5 h-5 text-white" aria-hidden="true"></i>
        </div>
        <h5 className="text-lg font-bold mb-4">Hopital "Full"</h5>
        <p className="text-gray-500">
        Retrouvez toutes les disciplines medicales et paramedicales en un seul endroit
        </p>
      </div>

      <div className="mb-2 lg:mb-0" >
        <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
        <i class="fa fa-user-md w-5 h5 text-white"></i>
        </div>
        <h5 className="text-lg font-bold mb-4">Equipe de soins qualifiée</h5>
        <p className="text-gray-500">
        Un personnel traitant et soignant constitué en grande partie de pédagogues, qui sont pour la plupart des experts dans leurs domaines
        </p>
      </div>

      <div className="mb-2 md:mb-0" >
        <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
        <i class="fa fa-bed w-5 h-5 text-white" aria-hidden="true"></i>
        </div>
        <h5 className="text-lg font-bold mb-4">Bonne capacité d'accueil</h5>
        <p className="text-gray-500">
        En termes d'hospitalisations, nous avons la capacité d'admettre 1000 adultes, 500 enfants, 200 bebes et 50 bebes prematurés 
        </p>
      </div>

      <div className="mb-2 md:mb-0" >
        <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
        <i class="fa fa-ambulance w-5 h-5 text-white"></i>
        </div>
        <h5 className="text-lg font-bold mb-4">Efficacité des urgences</h5>
        <p className="text-gray-500">
        Nos services d'urgences enregistrent un taux de mortalité annuel en dessous de 
        </p>
      </div>
    </div>
  
  </section>
  
  );
}
