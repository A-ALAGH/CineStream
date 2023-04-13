import React, { Component } from 'react'
import Search from '../Search/Search'
import Notification from '../Notifications/Notification'
import BoardSettings from '../BoardSettings/BoardSettings'
import UserMenu from '../UserMenu/UserMenu'
import styles from './SecondaryNavigation.module.css'

export default class SecondaryNavigation extends Component {
  render() {
    return (
      <div className= {styles.SecondaryNavigation}>
        <Search className={styles.box} />
        <Notification className={styles.box}/>
        <UserMenu className={styles.box}/>
        <BoardSettings className={styles.box}/>
      </div>
    )
  }
}