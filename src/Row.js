import React, { useEffect, useState } from 'react'
import {instance} from './requests/axios'
import './row.css'

const img_url="https://image.tmdb.org/t/p/original/"

export const Row=({title,url,isLarge})=> {

  const [movies,setMovies]=useState([])
  
  const getMovies=async()=>{
    const result=await instance.get(url).then((res)=>res.data)
    setMovies(result.results)
    
  } 
  console.table(movies)
  useEffect(()=>{
    getMovies()
  },[])

  

    return (
      <div className="movie-row">
        <div>{title}</div>
        <div className="movies">
          {movies?.map((movie)=>(
            <div className="card">
              <img key={movie.id} className={`row-poster ${isLarge && "large"}`} src={`${img_url}${isLarge?movie.poster_path:movie.backdrop_path}`} alt={movie.name||movie.title}/>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Row