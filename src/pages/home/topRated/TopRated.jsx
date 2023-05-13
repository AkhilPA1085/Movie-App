import React, { useState } from 'react';
import "../style.scss"
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper'
import SwitchingTab from '../../../Components/SwitchingTab/SwitchingTab'
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../Components/Carousel/Carousel';
import SwiperCarousel from '../../../Components/swiperCarousel/SwiperCarousel';

const TopRated = () => {
  const [endpoint,setEndpoint] = useState('movie');
  const {data,loading} = useFetch(`/${endpoint}/top_rated/`)
    const onTabChange = (tab)=>{
        console.log(tab)
      setEndpoint(tab === "movies" ? "movie" : "tv");
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">Top Rated</span>
            <SwitchingTab data={['movies','tv shows']} onTabChange={onTabChange}/>
        </ContentWrapper>
        <SwiperCarousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default TopRated