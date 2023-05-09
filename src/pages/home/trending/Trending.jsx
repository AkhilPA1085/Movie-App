import React, { useState } from 'react';
import "./style.scss"
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
        {/* <Carousel data={data?.results} loading={loading}/> */}
        <SwiperCarousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending