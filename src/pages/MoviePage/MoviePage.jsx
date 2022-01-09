import React, { useState, useRef } from 'react'
import { useApi } from '../../hook/useApi'
import { Header, FilmList } from '../../components/index'

const MoviePage = () => {
    const [searchInputValue, setSearchInputValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    const inputRef = useRef()
    const filmName = useRef()
    const prevPage = useRef(1)

    const api = useApi(setLoading)

    const changeHandler = (e) => setSearchInputValue(e.target.value)
    
    const tabHandler = async (tab) => {
        setPage(tab)
        const data = await api(searchInputValue, page)
        setData(data)
    }

    const submitHandler = async (e) => {
        if(e.code !== 'Enter') return 

        if(document.activeElement === inputRef.current){
            const data = await api(searchInputValue, page)
            filmName.current = searchInputValue
            setData(data)
        }

    }

    return (
        <>
            <Header 
                ref={inputRef}
                inputChangeHandler = {changeHandler}
                inputSubmitHandler={submitHandler}
                inlutValue = {searchInputValue}
            />
            <FilmList 
                data={data}
                isLoading={loading}
                ref={filmName} 
                pageHandler={tabHandler}
                currentPage = {page}
                prevPage={prevPage}
            />
        </>
    )
}

export default MoviePage
