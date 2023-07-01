import React from 'react'
import styles from './NotFound.module.css'
import error404 from 'assets/erro-404.png'

export default function NotFound() {
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}> 404 </span>

        <h1 className={styles.titulo}>Ooops! Page not found.</h1>

        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>

        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          principal
        </p>

        <div className={styles.botaoContainer}>
          <button>Voltar</button>
        </div>

        <img
          className={styles.imagemCachorro}
          src={error404}
          alt="Cachorro de óculos e vestido como humano"
        />
      </div>

      <div className={styles.espacoEmBranco}></div>
    </>
  )
}
