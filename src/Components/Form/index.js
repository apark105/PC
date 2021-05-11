import { useState } from "react"
import filledStar from "../../Assets/Stars/filled-star.svg"
import unfilledStar from "../../Assets/Stars/unfilled-star.svg"
import arrow from "../../Assets/arrow.svg"

import "./style.css";


function Form({ categoryList, addMovieInfo }) {

    // const [initial, setInitial] = useState("");
    const [movie, setMovie] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState(0);
    // const [star, setStar] = useState([
    //     {
    //         starCount: 1,
    //         selected: false,
    //     },
    //     {
    //         starCount: 2,
    //         selected: false,
    //     },
    //     {
    //         starCount: 3,
    //         selected: false,
    //     },
    //     {
    //         starCount: 4,
    //         selected: false,
    //     },
    //     {
    //         starCount: 5,
    //         selected: false,
    //     }
    // ])

    // useEffect(() => {

    // }, [star])



    const submitDetails = (e) => {
        e.preventDefault();

        if (!movie) {
            alert("please add movie info")
            return;
        }

        let movieInitial = ""

        for (let i = 0; i < movie.length; i++) {

            //check for char to be a letter, if not letter skip iteration
            if (!(/[a-zA-Z]/).test(movie[i])) {
                console.log('this should be skipped')
                continue
            }
            //check char to be uppercase, if so concat
            if (movie[i] === movie[i].toLocaleUpperCase()) {
                movieInitial += movie[i]
                console.log('this should have been added', movieInitial)
            }
        }
        console.log('Movie Initial', movieInitial)

        console.log('submitted', movie, category, rating)
        addMovieInfo({ initial: movieInitial, movie, category, rating, selected:false })



        setMovie("")
        setCategory("")
        setRating(0)

        // let starStatus = star;
        // for (let i = 0; i < star.length; i++) {
        //     starStatus[i].selected = false;
        // }
    }

    const selectRating = (count) => {

        // let starStatus = star;

        // for (let i = 0; i < rating; i++) {
        //     starStatus[i].selected = false;
        // }

        // for (let i = 0; i < count; i++) {
        //     starStatus[i].selected = true;
        // }

        // setStar(starStatus);
        setRating(count);

        // console.log('Star Status React Hooks', star)

    }

    return (
        <form className="form-container" onSubmit={submitDetails}>

            {/* Form Movie Name */}

            <div className="form-name">
                <label className="name-label" htmlFor="formName">Name</label>
                <input
                    type="text"
                    className="name-input"
                    id="formName"
                    onChange={(e) => {
                        setMovie(e.target.value)
                    }}
                    value={movie}
                    placeholder="Name of the movie"
                />
            </div>

            {/* Form Category */}

            <div className="form-category">
                <label className="category-label" htmlFor="formCategory">Category</label>
                <img src={arrow} alt="dropdown" className="arrow"/>
                <select className="category-select" defaultValue={'DEFAULT'} id="formCategory">
                    <option value="DEFAULT" disabled>Select a Category</option>

                    {
                        categoryList && categoryList.map((item, index) => {
                            return (
                                <option
                                    key={item.id + 1}
                                    className="category-select__item"
                                    value={item.name}
                                    onClick={() => { setCategory(item.name) }}
                                >
                                    {item.name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>

            {/* Form Rating */}

            <div className="form-rating">
                <label className="rating-label">Rating</label>
                <div className="rating-star">
                    {
                        Array.from(Array(5), (e, i) => {
                            return (
                                <div key={i + 1} className="star">
                                    <img
                                        className="star-img__unfilled"
                                        alt="star rating"
                                        onClick={() => {
                                            selectRating(i + 1);
                                        }}
                                        src={unfilledStar}
                                    />
                                    <img
                                        className={i < rating ? "star-img__filled star-img__filled-active" : "star-img__filled star-img__filled-inactive"}
                                        alt="star rating"
                                        onClick={() => {
                                            selectRating(i + 1);
                                        }}
                                        src={filledStar}
                                    />

                                </div>
                            )
                        })
                    }
                    {/* {
                        star && star.map((item, index) => {
                            return (
                                <div key={item.starCount + 1} className="star">
                                    <img
                                        className="star-img__unfilled"
                                        onClick={() => {
                                            selectRating(item.starCount);
                                        }}
                                        alt="star rating"
                                        src={unfilledStar}
                                    />

                                    <img
                                        className={item.selected ? "star-img__filled star-img__filled-active" : "star-img__filled star-img__filled-inactive"}
                                        alt="star rating"
                                        src={filledStar}
                                        onClick={() => {
                                            selectRating(item.starCount);
                                        }}
                                    />
                                </div>
                            )
                        })
                    } */}

                </div>
            </div>

            <button type="submit" className="form-button">Add Movie</button>


        </form>
    )
}

export default Form;
