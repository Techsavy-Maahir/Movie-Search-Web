import './css/App.css'
import Home from './pages/Home.jsx'
import Favourite from './pages/Favourite.jsx'
import { Routes, Route } from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext.jsx'
import NavBar from './components/NavBar.jsx'
function App() {

  return (

    <MovieProvider>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourite />} />
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
