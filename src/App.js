import Home from './paginas/Home'
import AboutMe from './paginas/AboutMe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
