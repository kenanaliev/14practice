import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import StyleSection from '../../../components/StyleSection'
import ArrivalsSection from '../../../components/ArrivalsSection'
import PopularSection from '../../../components/PopularSection'
import Watch from '../../../components/Watch'
import WatchOfChoice from '../../../components/WatchOfChoice'
import Product from '../../../components/Product'

const Home = () => {
  return (
    <div>
        <Helmet><title>Home</title></Helmet>
        <Navbar></Navbar>

        <main>
        <StyleSection></StyleSection>
        <ArrivalsSection></ArrivalsSection>
        <PopularSection></PopularSection>
        <Watch></Watch>
        <WatchOfChoice></WatchOfChoice>
        </main>

        <Footer></Footer>
    </div>
  )
}

export default Home