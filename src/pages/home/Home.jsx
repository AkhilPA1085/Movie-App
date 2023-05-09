import React from 'react'
import Banner from './homeBanner/Banner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

const Home = () => {
  return (
    <>
      <Banner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </>
  )
}

export default Home