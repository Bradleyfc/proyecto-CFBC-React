import { NavBar } from "./Components/NavBar";

import { Routes, Route,useLocation } from "react-router-dom";
import { Inicio } from "./routes/Inicio";
import { Cursos } from "./routes/Cursos";
import { Eventos } from "./routes/Eventos";
import { Noticias } from "./routes/Noticias";
import { Recursos } from "./routes/Recursos";
import { Estudiantes } from "./routes/Estudiantes";
import { Profesores } from "./routes/Profesores";
import { SapereAude } from "./routes/SapereAude";
//import { Admin } from "./routes/Admin";
import { PagAdmin } from "./pages/PagAdmin";
import {NoticiasForm} from "./pages/NoticiasForm";



export const App = () => {
  const location = useLocation();
  // definiendo donde se muestra el NavBar
  const mostrarNavBarPaths = ['/','/Cursos', '/Eventos', '/Noticias', '/Recursos', '/SapereAude'];
// chequeando que el actual path debe mostrar el NavBar
const debeMostrarNavBar = mostrarNavBarPaths.includes(location.pathname)|| 
!(['/Estudiantes', '/Profesores', '/PagAdmin', '/NoticiasForm'].includes(location.pathname));;

  return (
    <>
     {debeMostrarNavBar && <NavBar></NavBar> } 

      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path="/Cursos" element={<Cursos></Cursos>}></Route>
        <Route path="/Eventos" element={<Eventos></Eventos>}></Route>
        <Route path="/Noticias" element={<Noticias></Noticias>}></Route>
        <Route path="/Recursos" element={<Recursos></Recursos>}></Route>
        <Route
          path="/Estudiantes"
          element={<Estudiantes></Estudiantes>}
        ></Route>
        <Route path="/Profesores" element={<Profesores></Profesores>}></Route>
        <Route path="/SapereAude" element={<SapereAude></SapereAude>}></Route>
        {/* <Route path="/Admin" element={<Admin></Admin>}></Route> */}
        <Route path="/PagAdmin" element={<PagAdmin></PagAdmin>}></Route>
         
         <Route path = "/NoticiasForm" element = {<NoticiasForm></NoticiasForm>}></Route>
       {/* <Route path="*" element={<Inicio></Inicio>}></Route>  */}
      </Routes>
    </>
  );
};
