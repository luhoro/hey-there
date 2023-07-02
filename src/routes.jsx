import Home from './paginas/Home'
import AboutMe from './paginas/AboutMe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './componentes/Menu'
import Footer from 'componentes/Footer'
import MainPage from 'componentes/MainPage'
import Post from 'paginas/Post'
import NotFound from 'paginas/NotFound'
import ScrollToTop from 'componentes/ScrollToTop'

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Menu />

      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
