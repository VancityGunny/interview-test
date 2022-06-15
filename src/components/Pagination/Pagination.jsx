import React, { useState } from 'react'
import s from './Pagination.module.scss'

const Pagination = ({ films, pageHandler, currentPage, pages }) => {
    const [prevPage, setPrevPage] = useState(1)
    
    if (currentPage === 1 && prevPage !== 1) setPrevPage(1)

    const createPagination = () => {
        if (!films) return

        let lastPage = currentPage
        let [start, end] = [lastPage, prevPage+9]
        let result = []

        if (lastPage + 9 >= pages) end = pages

        if (lastPage - prevPage <= 4) {
            start = prevPage
        }else if(prevPage !== lastPage)(
            setPrevPage(lastPage)
        )

        for (let i = start; i <= end; i++) {
            result.push(
                <div
                    key={i}
                    onClick={() => pageHandler(i)}
                    className={currentPage === i ? s.itemActive : s.item}
                >
                    {i}
                </div>
            )
        }
        return result
    }

    return (
        <div className={s.container}>
            {currentPage === 1 ? null : (
                <div
                    className={s.paginationBtn}
                    onClick={() => pageHandler(Math.abs(currentPage - 1))}
                >
                    Prev
                </div>
            )}
            <div className={s.paginationContainer}>
                {createPagination()}
            </div>
            {currentPage === pages ? null : (
                <div
                    className={s.paginationBtn}
                    onClick={() => pageHandler(Math.abs(currentPage + 1))}
                >
                    Next
                </div>
            )}
        </div>
    )
}

export default Pagination
