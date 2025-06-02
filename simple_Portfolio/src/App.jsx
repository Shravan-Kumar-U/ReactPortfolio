
import './App.css'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/navbar/navbar'
import Project from './Components/Project/Project'

function App() {


  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
