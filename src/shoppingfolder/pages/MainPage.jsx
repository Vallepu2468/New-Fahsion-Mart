import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collection from '../components/Collection'
import Footer from '../components/Footer'
import {Gents,Ladies} from '../data'
import Womenscollection from '../components/Womenscollection'

const MainPage = () => {
  
  
  
  const[gentsFashion,setgentsFashion] = useState(Gents)

  const[ladiesFashion,setladiesFashion] = useState(Ladies)
  
  return (
    <div>
      <Header />
      <Banner />
      <Collection gentsFashion = {gentsFashion}/>
      <Womenscollection ladiesFashion = {ladiesFashion} />
      <Footer />
    </div>
  )
}

export default MainPage
