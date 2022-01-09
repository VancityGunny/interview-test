import React from 'react'
import Container from '../../hoc/Container/Container'
import s from './Header.module.scss'

const Header = React.forwardRef(({inputChangeHandler, inputSubmitHandler, inputValue}, ref) => {
    return (
        <div className={s.header}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.logo}>
                    {/* В ТЗ не было указанно ничего про роутинг по этому его тут нет) */}
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
                    <div className={s.user}>
                        <span></span>
                        <p>Maxim Zavadski</p>
                    </div>
                </div>
            </Container>
        </div>
    )
})

export default Header
