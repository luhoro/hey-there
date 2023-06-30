import React from 'react'
import styles from './PostModel.module.css'

export default function PostModel({ children, fotoCapa, titulo }) {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      ></div>

      <h2 className={styles.titulo}>
        {titulo}
      </h2>

      <div className={styles.postConteudoContainer}>

        {children}
      </div>

    </article>
  )
}
