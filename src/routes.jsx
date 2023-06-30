import Home from './paginas/Home'
import AboutMe from './paginas/AboutMe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './componentes/Menu'
import Footer from 'componentes/Footer'
import MainPage from 'componentes/MainPage'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
