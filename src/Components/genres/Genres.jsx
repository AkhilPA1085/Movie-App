import React from 'react'
import { useSelector } from 'react-redux'

import './style.scss'

const Genres = ({data}) => {
  const {geners} = useSelector((state)=>state.home);
  return (
    <div className='genres'>
      {data?.map((genreId)=>{
        if(!geners[genreId]?.name) return;
        return (
          <div key={genreId} className='genre'>
            {geners[genreId]?.name}
          </div>
        )
      })}
    </div>
  )
}

export default Genres