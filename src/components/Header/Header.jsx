import React from 'react'
import Container from '../../hoc/Container/Container'
import s from './Header.module.scss'

const Header = React.forwardRef(({inputChangeHandler, inputSubmitHandler, inputValue, btnHandler}, ref) => {
    return (
        <div className={s.header}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.logo}>
                        <a href="/" className={s.logoText}>Movie Catalog</a>
                    </div>
                    <div className={s.search}>
                        <label>
                            <input
                                ref={ref}
                                type='text'
                                value={inputValue}
                                onChange={inputChangeHandler}
                                onKeyDown={inputSubmitHandler}
                                placeholder='movie title'
                                required={true}
                            />
                        </label>
                    </div>
                    <div className={s.btnContainer}>
                        <button className={s.searchBtn} onClick={btnHandler}>Search</button>                        
                    </div>
                </div>
            </Container>
        </div>
    )
})

export default Header
