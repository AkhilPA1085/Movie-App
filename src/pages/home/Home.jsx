import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from './homeBanner/Banner'
import Trending from './trending/Trending'
import SwiperCarousel from '../../Components/swiperCarousel/SwiperCarousel'

const Home = () => {
  return (
    <>
      <Banner/>
      <Trending/>
      <SwiperCarousel/>
      <div style={{height:1000}}></div>
    </>
  )
}

export default Home