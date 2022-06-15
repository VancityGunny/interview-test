import React from 'react'
import Container from '../../hoc/Container/Container'
import { FilmCard, Spinner, NotSearch, SerchedInfo, Pagination } from '../index'
import s from './FilmList.module.scss'

const FilmList = React.forwardRef(
    ({ data, isLoading, pageHandler, currentPage }, ref) => {
        if (data?.Error) return <NotSearch filmName={ref.current} />

        if (isLoading) return <Spinner />

        if (data === undefined) return null
        if (data.results === undefined) return null

        return (
            <div className={s.wrapper}>
                <Container>
                    <SerchedInfo
                        filmName={ref.current}
                        totalFilms={data.total_results}
                    />
                    <div className={s.filmLists}>
                        {data.results.map((item) => {
                            return (
                                <FilmCard
                                    key={item.id + Date.now() + Math.random()}
                                    id={item.id}
                                    year={item.release_date}
                                    name={item.title}                                    
                                    type="movie"
                                    image={
                                        item.poster_path === null
                                            ? process.env.REACT_APP_IMAGE_PLACEHOLDER_URL
                                            : "https://image.tmdb.org/t/p/w200"+item.poster_path    // TODO: put image path prefix in constant file, or configurable database entry
                                    }
                                />
                            )
                        })}
                    </div>
                    <Pagination
                        films={data.total_results}
                        pages={data.total_pages}
                        pageHandler={pageHandler}
                        currentPage={currentPage}
                    />
                </Container>
            </div>
        )
    }
)

export default FilmList
