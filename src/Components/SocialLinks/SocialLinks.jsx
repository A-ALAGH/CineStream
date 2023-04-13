import React, { Component } from 'react'
import styles from './SocialLinks.module.css'
// import styles from '../Footer/Footer.module.css'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Twitter from './Twitter'
import Youtube from './Youtube'

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.Socialinks}>
        <div className={styles.Box}><Facebook /> </div>
        <div className={styles.Box}><Instagram /> </div>
        <div className={styles.Box}><Twitter /> </div>
        <div className={styles.Box}><Youtube /> </div>
      </div>
    )
  }
}