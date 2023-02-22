import React, { useEffect, useState } from 'react'
import {instance} from './requests/axios'
import './row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const img_url="https://image.tmdb.org/t/p/original/"

export const Row=({title,url,isLarge})=> {
  const [trailerUrl,setUrl]=useState("")
  const [movies,setMovies]=useState([])
  
  const opts={
    height:"400",
    width:"100%",
    playerVars:{
      autoplay:1
    }
  }

  const getMovies=async()=>{
    const result=await instance.get(url).then((res)=>res.data)
    setMovies(result.results)
  } 
  
  useEffect(()=>{
    getMovies()
  },[])

  const handleClick=(movie)=>{
    if (trailerUrl){
      setUrl("")
    }
    else{
      movieTrailer(movie?.name||movie?.title||"")
      .then(url=>{
        const urlParams=new URLSearchParams(new URL(url).search)
        setUrl(urlParams.get('v'))
      }).catch(err=>console.log(err))
    }
  }

    return (
      <div className="movie-row">
        <h1>{title}</h1>
        <div className="movies">
          {movies?.map((movie)=>(
            <div className="card">
              <img onClick={()=>handleClick(movie)} key={movie.id} className={`row-poster ${isLarge && "large"}`} src={`${img_url}${isLarge?movie.poster_path:movie.backdrop_path}`} alt={movie.name||movie.title}/>
            </div>
          ))}
        </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    )
}

export default Row