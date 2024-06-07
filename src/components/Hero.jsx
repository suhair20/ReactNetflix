import axios from 'axios'
import React, { useEffect, useState } from 'react'
import endpoints, { createImageurl } from '../services/movieServices'

function Hero() {
 const [movie,setmovie]=useState({})
 useEffect(()=>{
axios.get(endpoints.popular).then((Response)=>{
    const movies=Response.data.results;
    const randommovie=movies[Math.floor(Math.random()*movies.length)]
    setmovie(randommovie);
})
 },[])

const truncate=(str,length)=>{
    if(!str) return " "
     return str.length>length?str.slice(0,length)+'...':str
}

 if(!movie)
    return(
 <>
       <p>fetching movie...</p>
</>
    )
    const {title,backdrop_path,release_date,overview}=movie;
 return <div className='w-full h-[1550pxl] lg:h-[858px]'>
    <div className='w-full h-full'>
        <div className='absolute w-full h-[1550pxl] lg:h-[858px] bg-gradient-to-r from-black'/>
            <img className='w-full h-full object-cover object-top' src={createImageurl(backdrop_path,"original")} alt={title} />
        <div className='absolute w-full top-[30%] lg:top-[25%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-6xl font-nsans-bold'>{title}</h1>
            <div className='mt-8 mb-4'>
                <button className='capitalize border border-gray-300 py-2 px-5 '>play</button>
                <button className='capitalize border border-gray-300 py-2 px-5 ml-4'>watch later</button>
            </div>
            <p className='text-gray-400 text-sm'>{release_date}</p>
            <p className=' w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncate(overview,165)}</p>
        </div>

    </div>
 </div>
  
}

export default Hero
