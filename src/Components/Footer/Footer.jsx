import React, { Component } from 'react'
import styles from './Footer.module.css'
import SocialLinks from '../SocialLinks/Index'
import FooterLinks from '../FooterLinks/Index'

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.Footer}>
        <SocialLinks/>
        <FooterLinks/>
      </div>
    )
  }
}