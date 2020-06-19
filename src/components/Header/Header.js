import React from 'react'
import Button from '../Button/Button'
import HeaderNavigation from './HeaderNavigation'
import logoImage from '../../assets/images/logo.svg'

import styles from './Header.module.scss'
// import Navigation from './HeaderNavigation'

const Header = ({ openModalFn }) => (
    <header className={styles.wrapper}>
        <img src={logoImage} alt='FavNote'/>
        <HeaderNavigation/>
        <Button onClick ={ openModalFn} secondary>new item</Button>
    </header>
)

export default Header