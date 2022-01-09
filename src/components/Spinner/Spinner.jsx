import React from 'react'
import HashLoader from 'react-spinners/HashLoader'
import s from './Spinner.module.scss'

const Spinner = React.memo(() => {
    return (
        <div className={s.wrapper}>
            <HashLoader color='00BFFF' size={80}></HashLoader>
        </div>
    )
})

export default Spinner
