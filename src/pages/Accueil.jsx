
import React from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import FeatureServices from '../components/FeatureServices';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Personnel from '../components/Personnel';
import Assurances from '../components/Assurances';
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
      <Footer />
    </div>
  );
}
