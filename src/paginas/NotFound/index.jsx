import React from 'react'
import styles from './NotFound.module.css'
import error404 from 'assets/erro-404.png'
import ButtonMain from 'componentes/ButtonMain'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

  const navegar = useNavigate()

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}> 404 </span>

        <h1 className={styles.titulo}>Ooops! Página não encontrada.</h1>

        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>

        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          principal
        </p>

        <div
          className={styles.botaoContainer}
          onClick={ () => navegar('/') }
        >
          <ButtonMain tamanho="lg">
            Voltar
          </ButtonMain>
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
