import axios from "axios";
import "./App.css";
import Results from "./Components/Results";
import axois from "axios";
import { useEffect, useState } from "react";
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query="

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");


  const changeTheSearch = (event) => {

    setSearch(event.target.value)



  }



  const getAllMovies = ( ) => {
    axios.get(APIURL)
    .then(
      (response) => {
        setMovies(response.data.results)          
      }
    )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

const getSearchedMovies = () => {
    axois.get(
      SEARCHAPI+search 

    )
    .then(
      (response) => {
        console.log(response.data.results)
        setMovies(response.data.results)
      }
    )
   .catch(
    (error) => {
      console.log(error)
    }
   )

}

  useEffect(
    () => {
      // console.log("hello")
      if(search === "") {
        getAllMovies()
      }
      else{
        getSearchedMovies();
      }
    },
    [search]
  )

  return (
    <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
      <input
        value={search}
        onChange={changeTheSearch}
        type="search"
        className="w-full border border-black rounded text-slate-700 p-4"
      />
      <Results movies={movies} />
    </div>
  );
}

export default App;
