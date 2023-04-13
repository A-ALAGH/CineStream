import React, { Component } from 'react'
import styles from './Notification.module.css'
import NotificationIcon from './NotificationIcon'

export default class Notification extends Component {
  render() {
    return (
      <div className={styles.Notification}>
        <NotificationIcon/>
      </div>
    )
  }
}