import React, { Component } from 'react'
import styles from './BillBoard.module.css'
import BillBoardHeroImage from './assets/billboard.webp'
import TitlesImage from './assets/billboard-titles.png'
import Play from './playIcon'
import InfoIcon from './InfoIcon'

export default class BillBoard extends Component {
  render() {
    return (
      <div className={styles.BillBoard}>
        <div >
          <img src={BillBoardHeroImage} alt='hero' className={styles.InnerBillBoard} />
          <div  className={styles.Info}>
            <img src={TitlesImage} alt='title'/>
            <div className={styles.description}>
              Step inside the minds of the most innovative designers in a
              variety of disciplines and learn how design impacts every
              aspect of life.
            </div>
            <div className={styles.links}>
              <a href='www.netflix.com'>
                <Play/>
                <span>Play</span>
              </a>
              <button>
                <InfoIcon/>
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}