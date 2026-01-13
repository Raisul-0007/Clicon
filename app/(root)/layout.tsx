import React from 'react'
import NavberTwo from './../components/NavberTwo';
import Navber from './../components/Navber';
import Header from './../components/Header';
import HeaderTwo from './../components/HeaderTwo';
import Footer from './../components/Footer';

const grouplayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
    <Header/>
    <HeaderTwo/>
    <Navber/>
    <NavberTwo/>
      {children}
    <Footer/>
    </>
  )
}

export default grouplayout
