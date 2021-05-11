import { useState, useEffect } from "react";
import CardContainer from "./Components/CardContainer";
import Form from "./Components/Form";
import "./App.css";
// import logo from "./Assets/Stars/filled-star.svg"



function App() {

  const [categoryList] = useState([
    {
      id: 11,
      name: 'Action/Adventure',
    },
    {
      id: 22,
      name: 'Drama'
    },
    {
      id: 33,
      name: 'Comedy'
    }
  ])

  const [movieDetails, setMovieDetails] = useState([
    {
      id: 1,
      initial: "DBH",
      movie: "Death Becomes Her",
      category: "Comedy",
      rating: 3,
      selected: false,
    },
    {
      id: 2,
      initial: "G",
      movie: "Ghostbusters",
      category: "Comedy",
      rating: 5,
      selected: false,
    },
    {
      id: 3,
      initial: "HPS",
      movie: `Harry Potter - Sorcerer's stone`,
      category: "Drama",
      rating: 4,
      selected: false,
    },
    {
      id: 4,
      initial: "JP",
      movie: "Jurassic Park",
      category: "Action/Adventure",
      rating: 4,
      selected: false,
    },
    {
      id: 5,
      initial: "S",
      movie: "The Sandlot",
      category: "Comedy",
      rating: 4,
      selected: false,
    },
  ])

  useEffect(() => {

  }, [movieDetails])


  const addMovieInfo = (details) => {
    console.log(details)

    const id = Math.floor(Math.random() * 10000) + 1

    const newDetails = { id, ...details }


    setMovieDetails([...movieDetails, newDetails])

    console.log('app lvl: ',)
  }

  const toggleCard = (index) => {
    // setMovieDetails(movieDetails.map((item) => [{ ...item, selected: false }]))

    setMovieDetails( (prevState)=> {
      const newState = [...prevState] 

      const activeIndex = newState.findIndex((item)=>{
        return item.selected
      })

      //this closes when other items are opened 
      if(activeIndex !== -1) {
        newState[activeIndex].selected = false;
      }

      if(newState[index]) {
        if(newState[index].selected === true) {
          newState[index].selected = false;
          console.log('this should close')
        } else {
          newState[index].selected = true;
        }   
      }


      return newState;

    })
    // setMovieDetails(movieDetails.map((item) => item.id === id ? { ...item, selected: !item.selected } : item))

    // console.log('toggle card', id);
  }

  const editMovieInfo = () => {
    
  }

  const deleteCard = (id) => {
    console.log('delete card', id)
    // let movies = movieDetails.filter((item) => item.id !== id)
    // console.log('deleted', movies)
    setMovieDetails(
      (prevState)=>{
        return prevState.filter((item) => item.id !== id)
      })
  }

  return (
    <div className="screen-container">
      <header className="screen-header">
        Screen it
      </header>
      <div className="screen-underline"></div>
      <Form addMovieInfo={addMovieInfo} categoryList={categoryList} />
      <CardContainer movieDetails={movieDetails} toggleCard={toggleCard} deleteCard={deleteCard} />
    </div>
  );
}

export default App;

