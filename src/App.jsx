
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './component/NavBar/NavBar'
import Footer from './component/Footer/Footer'

function App() {
  (0)

  return (
    <div className="">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
