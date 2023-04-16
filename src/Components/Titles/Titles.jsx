import React, { Component } from 'react'
import styles from './Titles.module.css'
import Segment from '../Segment'

export default class Titles extends Component {
  render() {
    return (
      <div className={styles.Titles}>Titles
      <p>Popular on netflix</p>
      <Segment/>
      <p>Trending Now</p>
      <Segment/>
      <p>Newest</p>
      <Segment/>
      <p>Classics</p>
      <Segment/>

      </div>
    )
  }
}