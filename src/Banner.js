import { useEffect, useState } from "react"
import {instance} from './requests/axios'
import {requests} from './requests/request'
const img_url="https://image.tmdb.org/t/p/original/"

export const Banner=()=>{
    const [movie,setMovie]=useState([])

    const fetchdata=async()=>{
        const result=await instance.get(requests.fetchNetflixOriginals).then((res)=>res.data)
        setMovie(result.results[Math.floor(Math.random()*20)])
    }
    console.log(movie)
    useEffect(()=>{
        fetchdata()
    },[])

    return (
        <header className="banner" style={
            {backgroundImage:`url(${img_url}${movie?.backdrop_path})`,
            backgroundPosition:"center center",
            backgroundSize:"cover"
            }} > 
            
            
            <div className="banner-contents">
                <h1>{movie.title||movie.name||movie?.original_name}</h1>
                <div className="banner-buttons">
                    <button className="banner-b">Play</button>
                    <button className="banner-b">My List</button>
                </div>
                <p>{movie.overview}</p>
            </div>
            <div className="banner-fade"></div>
        </header>
    )
}