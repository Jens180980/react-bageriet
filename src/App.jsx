// General imports
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Partial imports
import Header from './Components/Partials/Header/Header.jsx'
import Footer from './Components/Partials/Footer/Footer.jsx'
import Main from './Components/Partials/Main/Main.jsx'

// Pages imports
import Home from './Components/Pages/Home/Home'
import Products from './Components/Pages/Products/Products'
import Contact from './Components/Pages/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
