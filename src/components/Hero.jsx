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
 return <div className="relative w-full h-screen lg:h-[858px]">
 {/* Background image with gradient overlay */}
 <div className="relative w-full h-full">
   <img
     className="w-full h-full object-cover object-top"
     src={createImageurl(backdrop_path, "original")}
     alt={title}
   />
   <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
 </div>

 {/* Content section */}
 <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-8 space-y-4">
   <h1 className="text-3xl md:text-6xl font-nsans-bold text-white">{title}</h1>
   <div className="flex space-x-4">
     <button className="capitalize border border-gray-300 py-2 px-5 text-white">
       Play
     </button>
     <button className="capitalize border border-gray-300 py-2 px-5 text-white">
       Watch Later
     </button>
   </div>
   <p className="text-gray-400 text-sm">{release_date}</p>
   <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
     {truncate(overview, 165)}
   </p>
 </div>
</div>
  
}

export default Hero
