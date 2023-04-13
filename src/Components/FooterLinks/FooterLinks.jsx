import React, { Component } from 'react'
import styles from './FooterLinks.module.css'

const Links=[
  'Des questions ? Contactez-nous.',
  'FAQ',
  'Centre d`aide',
  'Compte',
  'Presse',
  'Relations Investisseurs',
  'Recrutement',
  'Modes de lecture',
  'Conditions d`utilisation',
  'Confidentialité',
  'Préférences de cookies',
  'Mentions légales',
  'Nous contacter',
  'Test de vitesse',
  'Informations légales',
  'Seulement sur Netflix',
]

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.FooterLinks}>
        <ul>{Links.map((Link)=>(<li key='Link'><a href='netflix.com'>{Link}</a></li>
         ))}
        </ul>
      </div>
    )
  }
}