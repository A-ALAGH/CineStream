import React, { Component } from 'react'
import styles from './Segment.module.css'
import placeHolderImage from './assets/thumbnail1.png'
import chevronRightIcon from './chevronRightIcon'

export default class Segment extends Component {
  render() {
    return (
      <div className={styles.row}>
        <img src={placeHolderImage} alt=''/>
        <img src={placeHolderImage} alt=''/>
        <img src={placeHolderImage} alt=''/>
        <img src={placeHolderImage} alt=''/>
        <img src={placeHolderImage} alt=''/>
        <button><chevronRightIcon/></button>
      </div>
    )
  }
}
