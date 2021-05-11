import { useEffect } from 'react';
import './style.css';
import filledStar from "../../Assets/Stars/filled-star.svg"
import unfilledStar from "../../Assets/Stars/unfilled-star.svg"


function CardDetails({ details, starRating }) {
    const { initial, movie, category, rating } = details

    // console.log('Card Details: ', details)
    // const mountStars = starRating

    // useEffect(() => {
    //     console.log('comp did mount', mountStars)
    //     for (let i=0; i<rating; i++) {
    //         mountStars[i].selected = true;
    //         console.log(mountStars[i])
    //     }
    //     console.log('comp after loop mount', mountStars)

    // })


    return (
        <div className="card">
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
        </div>
    )
}

export default CardDetails
