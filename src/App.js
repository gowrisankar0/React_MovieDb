import React, { useEffect, useState } from 'react';
import "swiper/css";
import Header from './pages/Header';
import "./App.css"
import Banner from './pages/Banner';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './pages/Main';
import Footer from './pages/Footer';
import BackToTop from './components/BackToTop';


const App = () => {

  const [scroll,setScroll]=useState(0);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      setScroll(window.scrollY)
    });

    return ()=>{
      window.removeEventListener("scroll",()=>{
        setScroll(window.scrollY);
      })
    }
     
  },[scroll])

  return (
    <div>
      <Header scroll={scroll}/>
      <Banner />
      <Main />
      <Footer />
      <BackToTop scroll={scroll}/>
    </div>
  )
}

export default App