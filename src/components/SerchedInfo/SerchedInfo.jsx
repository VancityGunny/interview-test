import React from 'react'
import s from './SerchedInfo.module.scss'

const SerchedInfo = React.memo(({ filmName, totalFilms }) => {
    return (
        <div>
            <div className={s.searchResult}>
                <p>
                    You searched for: <span>{filmName}</span>,{' '}
                    <span>{totalFilms}</span> results found
                </p>
            </div>
        </div>
    )
})

export default SerchedInfo
