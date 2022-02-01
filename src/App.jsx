// General imports
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// Partial imports
import Header from './Components/Partials/Header/Header.jsx'
import Footer from './Components/Partials/Footer/Footer.jsx'
import Main from './Components/Partials/Main/Main.jsx'
import Login from './Components/Partials/Login/Login.jsx'

// Pages imports
import Home from './Components/Pages/Home/Home'
import Products from './Components/Pages/Products/Products'
import Contact from './Components/Pages/Contact/Contact'
import { AuthProvider } from './Components/Context/AuthProvider'

function App() {

  const [Modal, setModal] = useState(false)
  const changeModal = (change) => setModal(change)

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Header changeModal={changeModal}/>
          {Modal ? <Login changeModal={changeModal}/> : null}
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
    </AuthProvider>
  )
}

export default App
