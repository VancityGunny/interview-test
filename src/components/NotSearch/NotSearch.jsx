import React from 'react'
import s from './NotSearch.module.scss'

const NotSearch = ({ filmName }) => {
    return (
        <div className={s.container}>
            No results were found for<span> { filmName}</span>
        </div>
    )
}

export default NotSearch
