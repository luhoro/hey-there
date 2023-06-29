import React from 'react'
import styles from './Banner.module.css'
import circulo from 'assets/circle.svg'
import minhaFoto from 'assets/my-photo.jpg'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Hey, there!
        </h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu portfólio! Eu sou a Luisa Horowitz, estudante em Análise e Desenvolvimento de Sistemas na Descomplica, e Desenvolvedora FrontEnd. 
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circulo}
          src={circulo}
          aria-hidden={true}
        />
        
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto da Luisa Horowitz" />
      </div>
    </div>
  )
}
