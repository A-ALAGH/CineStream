import React, { Component } from 'react'
import styles from './BillBoard.module.css'
import BillBoardHeroImage from './assets/billboard.webp'
import TitlesImage from './assets/billboard-titles.png'

export default class BillBoard extends Component {
  render() {
    return (
      <div className={styles.BillBoard}>
        <div >
          <img src={BillBoardHeroImage} alt='hero' className={styles.InnerBillBoard} />
          <div  className={styles.Info}>
            <img src={TitlesImage} alt='title'/>
          </div>
        </div>
      </div>
    )
  }
}