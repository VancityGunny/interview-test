import React from 'react'
import Container from '../../hoc/Container/Container'
import s from './Header.module.scss'

const Header = React.forwardRef(({inputChangeHandler, inputSubmitHandler, inputValue, btnHandler}, ref) => {
    return (
        <div className={s.header}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.logo}>
                        <a href="/" className={s.logoText} title='Logo'>Movie Catalog</a>
                    </div>
                    <div className={s.search}>
                        <label>
                            <input
                                ref={ref}
                                type='text'
                                value={inputValue}
                                onChange={inputChangeHandler}
                                onKeyUp={inputSubmitHandler}
                                placeholder='movie title'
                                title='Movie title'
                            />
                        </label>
                    </div>
                    <div className={s.btnContainer} hidden={true}>
                        <button className={s.searchBtn} onClick={btnHandler} title='Search button'>Search</button>                        
                    </div>
                </div>
            </Container>
        </div>
    )
})

export default Header
