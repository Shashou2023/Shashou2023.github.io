
import React from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import FeatureServices from '../components/FeatureServices';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Personnel from '../components/Personnel';
import Assurances from '../components/Assurances';
import Pricing from '../components/Pricing';
import Patient from '../components/Patient';
import Team from '../components/Team';
import Footer from '../components/Footer';
export default function Acceuil() {
  return (
    <div>
         <Header />
      <Jumbotron />
      <FeatureServices/>
      <Services/>
      <Stats/>
      <Personnel/>
      <Assurances/>
      <Pricing />
      <Patient />
      <Team />
      <Footer />
    </div>
  );
}
