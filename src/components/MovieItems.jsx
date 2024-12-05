import React from 'react'
import { createImageurl } from '../services/movieServices'
import { useState } from 'react';
import { FaHeart,FaRegHeart } from "react-icons/fa";

const MovieItems = ({ movie }) => {
    const { title, backdrop_path, poster_path } = movie;
    const [like,setlike]=useState(false)
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div
        className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className='w-full h-40 block object-cover object-top'
          src={createImageurl(backdrop_path ?? poster_path, "w500")}
          alt={title}
      />
  
        {isHovered && (
          <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
            <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold'>
              {title}
            </p>

            <p>
                {like?(<FaHeart size={20} className='absolute top-2 left-2 text-gray-300'/> ):(
                 <FaRegHeart size={20} className='absolute top-2 left-2 text-gray-300'/>)}
            </p>
          </div>
        )}
      </div>
    );
  };
  

  export default MovieItems
