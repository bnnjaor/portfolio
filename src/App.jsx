import Header from "./components/Header"
import Inicio from "./components/Inicio"
import SobreMi from "./components/SobreMi"
import Proyectos from "./components/Proyectos"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"


function App() {

  return (
    <div className=" bg-gradient-to-b from-black via-[#0b2c46]  to-black h-full flex flex-col items-center dark:bg-gradient-to-b dark:from-gray-300 dark:via-white dark:to-gray-300  ">
      <Header/>
      <Inicio />
      <SobreMi/>
      <Proyectos/>
      <Contacto/>
      <Footer/>

    </div>
  )
}

export default App
