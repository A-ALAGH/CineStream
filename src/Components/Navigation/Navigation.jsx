import React, { Component } from 'react'
import styles from './Navigation.module.css'
import logo from './assets/logo.webp.png'
import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation'

const NavItems= [
  <img src={logo} alt='logo' className={styles.logo}/>,
  'Home',
  'TV Shows',
  'Movies',
  'Newest',
  'Popular',
  'My List'
]

export default class Navigation extends Component {
  render() {
    return (
      <div className={styles.navigation}>
        <div className={styles.mainNavigation}>
        {/* <img src={logo} alt='logo' className={styles.logo}/> */}
        <ul className={styles.navigationList}>{NavItems.map((Item)=>(<li key='item' className={styles.navigationItem}>{Item}</li>
        ))}
        </ul>
        </div>
        <SecondaryNavigation/>
      </div>
    )
  }
}