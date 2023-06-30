import React from 'react'
import Banner from '../Banner'
import { Outlet } from 'react-router-dom'

export default function MainPage() {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  )
}
