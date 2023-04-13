import React, { Component } from 'react'
import styles from './BoardSettings.module.css'
import BoardSettingsIcon from './BoardSettingsIcon'

export default class BoardSettings extends Component {
  render() {
    return (
      <div className={styles.BoardSettings}>
        <BoardSettingsIcon/>
      </div>
    )
  }
}