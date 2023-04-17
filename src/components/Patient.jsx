import React from 'react'

function Patient() {
  return (
    <section className="mt-5" id="patient">
    <h2 className="text-3xl font-bold mb-2 text-center">
    Préparez votre <span class="text-blue-400">Visite</span> à l'hôpital
  </h2>
  <p className="mb-4 mt-6 px-6 text-xl font-light text-center leading-relaxed" >
Notre objectif est de vous faire vivre en tant que patient une experience agréable. Nous nous engageons à vous fournir des soins personnels
de haute qualité.
<br/>
<span className='font-bold'>Que devez vous apportez?</span>
<ul>
<li>
    Veuillez apportez votre carte d'identité et s'il ya lieu votre carte d'assurance
</li>
<li>
    Si votre visite comprend un séjour à l'hopital, veillez dresser une liste de contacts importants, y compris les noms 
    et numeros de téléphone
</li>
</ul>
</p>
<p className="mb-4 mt-6 px-6 text-xl font-light  text-center leading-relaxed">
<br/>
<span className='font-bold'>Autres Informations</span>
<ul>
<li>
    Horaires de visite dans les salles d'hospitalisation:
</li>
</ul>
</p>
  </section>
  )
}

export default Patient