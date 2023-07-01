import React from 'react'
import './Post.css'
import { useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModel from 'componentes/PostModel'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function Post() {
  const parametros = useParams()

  const post = posts.find(post => post.id === Number(parametros.id))
  
  if (!post) {
    return <h1>Post not found</h1>
  }

  return (
    <PostModel
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModel>
  )
}
