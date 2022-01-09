import React from 'react'
import s from './FilmCard.module.scss'

const FilmCard = React.memo(({ image, name, year, id, type }) => {
    return (
        <div className={s.cardContainer}>
            <img src={image} className={s.image} alt='Film poster' placeholder={process.env.REACT_APP_IMAGE_PLACEHOLDER_URL} />
            <div className={s.description}>
                <p>
                    <span>Name:</span> {name}
                </p>
                <p>
                    <span>Year:</span> {year}
                </p>
                <p>
                    <span>imdbID:</span> {id}
                </p>
                <p>
                    <span>Type:</span> {type}
                </p>
            </div>
        </div>
    )
})

export default FilmCard
