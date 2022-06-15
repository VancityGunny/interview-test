import React, { useState, useRef, useCallback } from 'react'
import { useApi } from '../../hook/useApi'
import { Header, FilmList } from '../../components/index'

const MoviePage = () => {
    const [searchInputValue, setSearchInputValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    const inputRef = useRef()
    const filmName = useRef()

    const api = useApi(setLoading)

    const changeHandler = (e) => setSearchInputValue(e.target.value)
    
    const tabHandler = useCallback(async (tab) => {
        setPage(tab)
        const data = await api(filmName.current, tab)
        setData(data)
        window.scrollTo({ top: 0 })
    }, [api])

    const inputSubmitHandler = async (e) => {
        if(!searchInputValue) {
            if(document.activeElement !== inputRef.current) inputRef.current.focus()
            return
        }

        if(document.activeElement === inputRef.current){
            setPage(1)
            const data = await api(searchInputValue)
            filmName.current = searchInputValue
            setData(data)
            return
        }
    }

    const buttonSubmitHandler = async () => {
        if(!searchInputValue) {
            inputRef.current.focus()
            return
        }
        setPage(1)

        const data = await api(searchInputValue)
        filmName.current = searchInputValue
        setData(data)
    }

    return (
        <>
            <Header 
                ref={inputRef}
                inputChangeHandler = {changeHandler}
                inputSubmitHandler={inputSubmitHandler}
                inlutValue = {searchInputValue}
                btnHandler={buttonSubmitHandler}
            />
            <FilmList 
                data={data}
                isLoading={loading}
                ref={filmName} 
                pageHandler={tabHandler}
                currentPage = {page}
            />
        </>
    )
}

export default MoviePage
