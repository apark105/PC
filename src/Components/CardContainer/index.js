// import {useState} from 'react';
import CardDetails from '../CardDetails';
import './style.css';


function CardContainer({movieDetails, toggleCard, deleteCard}) {


    // console.log(movieDetails);

    return (
        <div className="card-container">
            {movieDetails && movieDetails.map( (item, index) => {
                return (
                    <CardDetails key={item.id} details={item} toggleCard={ ()=> {
                        toggleCard(index)
                    }} deleteCard={deleteCard}/>
                )
            })}
        </div>
    )
}

export default CardContainer
