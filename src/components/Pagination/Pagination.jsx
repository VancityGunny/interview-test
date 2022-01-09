import React from 'react'
import s from './Pagination.module.scss'

const Pagination = React.forwardRef( ({ films, pageHandler, currentPage }, ref) => {
    const pages = Math.ceil(films / 10)

    const createPagination = () => {
        if (!films) return

        let result = []
        let lastPage = ref.current

        if(currentPage - ref.current >= 5){
            lastPage = currentPage
            ref.current = lastPage
        }


        for (let i = lastPage; i <= lastPage+10; i++) {  
            result.push(
                <div key={i} onClick={() => pageHandler(i)} className={currentPage === i ? s.itemActive : s.item}>
                    {i}
                </div>
            )
        }
        return result
    }
    return <div className={s.container}>
        {currentPage === 1 ? null : <div className={s.paginationBtn} onClick={() => pageHandler(Math.abs(currentPage-1))}>Prev</div>}
        {createPagination()}
        {currentPage === pages ? null : <div className={s.paginationBtn} onClick={() => pageHandler(Math.abs(currentPage+1))}>Next</div>}
    </div>
})

export default Pagination
