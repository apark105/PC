import { useState } from "react";
import CardContainer from "./Components/CardContainer";
import Form from "./Components/Form";
import "./App.css";
// import logo from "./Assets/Stars/filled-star.svg"



function App() {

  const [categoryList] = useState([
    { 
      id:11,
      name:'Action/Adventure',
    },
     { 
       id:22,
       name:'Drama'
      }, 
     { 
       id:33,
       name:'Comedy'
      }
    ])

  const [movieDetails, setMovieDetails] = useState([
    {
      id: 1,
      initial:"DBH",
      movie: "Death Becomes Her",
      category: "Comedy",
      rating: 3
    },
    {
      id: 2,
      initial:"G",
      movie: "Ghostbusters",
      category: "Comedy",
      rating: 5
    },
    {
      id: 3,
      initial:"HPS",
      movie: `Harry Potter - Sorcerer's stone`,
      category: "Drama",
      rating: 4
    },
    {
      id: 4,
      initial:"JP",
      movie: "Jurassic Park",
      category: "Action/Adventure",
      rating: 4
    },
    {
      id: 5,
      initial:"S",
      movie: "The Sandlot",
      category: "Comedy",
      rating: 4
    },
  ])


const addMovieInfo = (details) => {
  console.log(details)

  const id = Math.floor(Math.random() * 10000) +1

  const newDetails = {id, ...details}

  
  setMovieDetails([...movieDetails, newDetails])

  console.log('app lvl: ', )

}

  return (
    <div className="screen-container">
      <header className="screen-header">
        Screen it
      </header>
      <div className="screen-underline"></div>
      <Form addMovieInfo={addMovieInfo} categoryList={categoryList} />
      <CardContainer movieDetails={movieDetails} />
    </div>
  );
}

export default App;

