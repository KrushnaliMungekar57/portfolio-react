import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'
import reactLogo from './assets/img/logo.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
//import { Footer } from "./components/Footer";






function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
     
    </>
  );
}

export default App;
