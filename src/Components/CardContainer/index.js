import {useState} from 'react';
import CardDetails from '../CardDetails';
import './style.css';


function CardContainer({movieDetails}) {
    const [star, setStar] = useState([
        {
            starCount: 1,
            selected: false,
        },
        {
            starCount: 2,
            selected: false,
        },
        {
            starCount: 3,
            selected: false,
        },
        {
            starCount: 4,
            selected: false,
        },
        {
            starCount: 5,
            selected: false,
        }
    ])

    console.log(movieDetails);

    return (
        <div className="card-container">
            {movieDetails && movieDetails.map( (item) => {
                return (
                    <CardDetails key={item.id} details={item} starRating={star}/>
                )
            })}
        </div>
    )
}

export default CardContainer
