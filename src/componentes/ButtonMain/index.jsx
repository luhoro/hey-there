import React from 'react'
import styles from './ButtonMain.module.css'

export default function ButtonMain({ children, tamanho }) {
  return (
    <button className={`
      ${styles.botao}
      ${styles[tamanho]}
    `}>
      {children}
    </button>
  )
}
