import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Ruteo } from './app/Utilidades/Rutas/Ruteo'
import { Cabecera } from './app/Componentes/Contenedor/cabecera'


function App() {
   return (
    <>
      <div>
        <BrowserRouter>
        <Cabecera />

        <Ruteo />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App