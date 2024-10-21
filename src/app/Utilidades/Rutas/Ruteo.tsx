import {Route , Routes} from "react-router-dom";
import { Inicio } from "../../Componentes/Contenedor/Inicio";
import { AdministrarArtista } from "../../Componentes/Artistas/AdmiA";
import { ListarArtista } from "../../Componentes/Artistas/ListA";
import { RegistrarArtista } from "../../Componentes/Artistas/RegisA";
import { Acerca } from "../../Componentes/Otros/acercaDe";
import { NoEncontrado } from "../../Componentes/Contenedor/noEncontrado";



export const Ruteo = ()=>{
    return(
       <Routes>
        <Route path="/" element={<Inicio />}/>

        <Route path="/AdmiA" element={<AdministrarArtista />}/>
        <Route path="/listA" element={<ListarArtista />}/>
        <Route path="/RegisA" element={<RegistrarArtista />}/>
        
        <Route path="/acercaA" element={<Acerca/>}/>

        <Route path="*" element={<NoEncontrado/>}/>
       </Routes>
    )
}