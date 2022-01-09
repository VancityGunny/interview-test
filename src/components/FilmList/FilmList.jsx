import React from 'react'
import Container from '../../hoc/Container/Container'
import { FilmCard, Spinner, NotSearch, SerchedInfo, Pagination } from '../index'
import s from './FilmList.module.scss'

const FilmList = React.forwardRef(({ data, isLoading, pageHandler, currentPage, prevPage }, ref) => {

    if (data?.Error) return <NotSearch filmName={ref.current} />

    if(isLoading) return <Spinner />
        
    if (data.length === 0) return null

    return (
        <div className={s.wrapper}>
                    <Container>
                        <SerchedInfo filmName={ref.current} totalFilms={data.totalResults}/>
                        <div className={s.filmLists}>
                            {data.Search.map((item) => {
                                return (
                                        <FilmCard
                                            key={item.imdbID + Date.now() + Math.random()}
                                            id={item.imdbID}
                                            year={item.Year}
                                            name={item.Title}
                                            type={item.Type}
                                            image={item.Poster === "N/A" ? process.env.REACT_APP_IMAGE_PLACEHOLDER_URL : item.Poster}
                                        />
                                )
                            })}
                        </div>
                        <Pagination
                            films={data.totalResults}
                            pageHandler={pageHandler} 
                            currentPage={currentPage}
                            ref={prevPage}
                        />
                    </Container>
                </div>
    )
})

export default FilmList
