import React, { useState } from 'react';
import "../style.scss"
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper'
import SwitchingTab from '../../../Components/SwitchingTab/SwitchingTab'
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../Components/Carousel/Carousel';
import SwiperCarousel from '../../../Components/swiperCarousel/SwiperCarousel';

const Trending = () => {
  const [endpoint,setEndpoint] = useState('day');
  const {data,loading} = useFetch(`/trending/all/${endpoint}`)
    const onTabChange = (tab)=>{
      setEndpoint(tab);
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchingTab data={['day','week']} onTabChange={onTabChange}/>
        </ContentWrapper>
        <SwiperCarousel data={data?.results} loading={loading} endpoint = {endpoint}/>
    </div>
  )
}

export default Trending