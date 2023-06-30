import React from 'react'
import styles from './AboutMe.module.css'

import PostModel from 'componentes/PostModel'
import fotoCapa from 'assets/aboutme-cover.png'
import fotoSobreMim from 'assets/aboutme-photo.jpg'

export default function AboutMe() {
  return (
    <PostModel
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou a Luisa
      </h3>

      <img
        src={fotoSobreMim}
        alt="Foto da Luisa sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, commodi praesentium sed quasi blanditiis aut quia! Dolor nihil labore recusandae maxime officia molestias aut natus porro deserunt, distinctio odit autem.</p>

      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eos, cumque quo quaerat porro dolorem sit tempora, inventore repellat nulla beatae iure aperiam pariatur delectus! Cumque, accusamus eum ad, deleniti sapiente minus nobis iusto modi harum hic provident, obcaecati atque! Nam distinctio dolore deserunt, aliquam incidunt fuga animi quod, asperiores possimus tenetur mollitia assumenda. Dolore laborum dignissimos eveniet voluptatibus aut ad accusamus consectetur, architecto ut vero velit provident! Odit ab excepturi assumenda porro praesentium fugit repellendus velit! At, iste voluptate, laboriosam facilis exercitationem dignissimos accusantium, ipsam a perferendis fuga dolorum repudiandae iusto in? Incidunt repellat aut molestiae, minima accusamus commodi est esse aliquam dignissimos eaque consectetur provident numquam quas cupiditate architecto qui nesciunt? Tempore, placeat, totam asperiores odit fuga quas omnis temporibus, alias libero voluptatibus aspernatur sit vitae labore adipisci autem optio earum?</p>

      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, assumenda magnam? Illo ipsam modi ducimus. Qui consequatur quia quae laudantium commodi beatae iste velit numquam tempore ratione repudiandae, soluta architecto ea perferendis. Porro dolor ipsam, reiciendis ullam non a, odio, magnam in commodi provident error possimus. Accusantium optio quod, sunt amet quam earum officia hic. Alias eligendi libero incidunt sunt amet iure deserunt voluptatum ex, molestias laudantium sint non porro vero mollitia illum, commodi laboriosam voluptatem est? Sequi, necessitatibus.</p>
    </PostModel>
  )
}
