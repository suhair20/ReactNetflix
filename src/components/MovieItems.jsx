import React from 'react'
import { createImageurl } from '../services/movieServices'

function MovieItems({movie}) {
    const {title,backdrop_path,poster_path}=movie
  return (
    <div className='raletive w-[160px] sm:w-[200px] md:w[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
     <img className='w-full h-40  block object-cover object-top' src={createImageurl(backdrop_path??poster_path,"w500")} alt={title} />

     <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
        <p>{movie.title}</p>
    </div>
    </div>
   
  )
}

export default MovieItems
