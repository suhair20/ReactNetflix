import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieItems from './MovieItems'

function Movierow({title,url}) {
  const [movies,setmovie]=useState([])

  useEffect(()=>{
    axios.get(url).then((Response)=>setmovie(Response.data.results))
  },[url])
  return (
    <div>
      <h2 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h2>
      <div className='relative flex items-centere'>
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies.map((movie)=>{
            return <MovieItems key={movie.id} movie={movie}/>
          })}</div>
          
      </div>
    </div>
  )
}

export default Movierow
