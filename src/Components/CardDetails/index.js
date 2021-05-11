// import { useEffect } from 'react';
import './style.css';
import filledStar from "../../Assets/Stars/filled-star.svg"
import unfilledStar from "../../Assets/Stars/unfilled-star.svg"


function CardDetails({details, toggleCard, deleteCard }) {
    const {id, initial, movie, category, rating, selected } = details

    return (
        <div className="card" onClick={toggleCard} >
            <div className="card-id">{initial}</div>
            <div className="card-detail">
                <div className="card-title">{movie}</div>
                <div className="card-category">{category}</div>
            </div>
            <div className="card-rating">
                <div className="rating-star">
                    {
                        Array.from(Array(5), (e, i) => {
                            return (
                                <div key={i + 1} className="star">
                                    <img
                                        className="star__unfilled"
                                        alt="star rating"
                                        src={unfilledStar}
                                    />
                                    <img
                                        className={i < rating ? "star__filled star-img__filled-active" : "star-img__filled star-img__filled-inactive"}
                                        alt="star rating"
                                        src={filledStar}
                                    />

                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className={ selected ? 'card-button card-button-active' : 'card-button card-button-inactive'}>
                <button className="card-edit">Edit</button>
                <button onClick={ ()=> {deleteCard(id)}} className="card-delete">Delete</button>
            </div>
        </div>
    )
}

export default CardDetails
