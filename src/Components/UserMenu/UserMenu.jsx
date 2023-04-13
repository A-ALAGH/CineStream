import React, { Component } from 'react'
import styles from './UserMenu.module.css'
import UserMenuIcon from './UserMenuIcon'

export default class UserMenu extends Component {
  render() {
    return (
      <div className={styles.UserMenu}>
        <UserMenuIcon/>
      </div>
    )
  }
}