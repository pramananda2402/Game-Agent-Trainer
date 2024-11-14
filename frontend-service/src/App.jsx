
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home.jsx'
import GameBuilder from './Pages/GameBuilder/GameBuilder.jsx'

function App() {
  

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GameBuilder" element={<GameBuilder />} />
      </Routes>
          
    </BrowserRouter>
  )
}

export default App
