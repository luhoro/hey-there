import Home from './paginas/Home'
import AboutMe from './paginas/AboutMe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './componentes/Menu'


function AppRoutes() {
  return (
    <BrowserRouter>
      
      <Menu />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
