
import './App.css'
import Support from './components/Support'
import About from './components/About'
import NotFound from './components/NotFound'
import Labs from './components/Labs'
import Home from './components/Home'
import { NavLink,Route,Routes } from 'react-router-dom'
import MainHeader from './components/MainHeader'

function App() {

  return (

    <>
      <nav>
           <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            <li>
              <NavLink to="/labs">Labs</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
           </ul>
      </nav>
      <Routes>
        <Route path='/' element={<MainHeader/>}/>
        {/* Default Route */}
        <Route index element={<Home/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
