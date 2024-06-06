import axios from 'axios'
import React, { useEffect, useState } from 'react'
import endpoints from '../services/movieServices'

function Hero() {
 const [movie,setmovie]=useState({})
 useEffect(()=>{
axios.get(endpoints.popular).then((Response)=>{
    const movies=Response.data.results;
    const randommovie=movies[Math.floor(Math.random()*movies.length)]
    setmovie(randommovie);
})
 },[])
 if(!movie)
    return(
 <>
       <p>fetching movie...</p>
</>
    )
    const {title,backdrop_path,release_date,overview}=movie;
 return <div className='w-full h-[1550pxl] lg:h-[858px]'>
    <div className='w-full h-full'>
        <div className='absolute w-full h-[1550pxl] lg:h-[858px] bg-gradient-to-r from-black'>
            <img className='w-full h-full object-cover object-top' src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} />
        </div>
    </div>
 </div>
  
}

export default Hero
