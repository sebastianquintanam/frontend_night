import "./css/App.css";
//Components
import Navbar from "./components/navbar/Navbar";
import Nosotros from "./components/Nosotros";
import Home from "./components/Home";
import Footer from "./components/footer";
import EjemplosIndex from "./components/ejemplos";
import ComponenteFuncion from "./components/ejemplos/ComponenteFuncion";
import ComponenteClase from "./components/ejemplos/ComponenteClase";
import CategoriasIndex from "./components/categorias";
import ProductosIndex from "./components/productos";
import UsuariosIndex from "./components/usuarios";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/ejemplos" element={<EjemplosIndex />} />
                    <Route path="/productos" element={<ProductosIndex />} />
                    <Route path="/categorias" element={<CategoriasIndex />} />
                    <Route path="/usuarios" element={<UsuariosIndex />} />
                    <Route
                        path="/ejemplos/funcion"
                        element={
                            <ComponenteFuncion
                                msn={"Mensaje por PROPS de comp. Funcion"}
                            />
                        }
                    />
                    <Route
                        path="/ejemplos/clase"
                        element={
                            <ComponenteClase
                                msn={"Mensaje por PROPS de comp. CLASE"}
                            />
                        }
                    />
                </Routes>

                <Footer />
            </div>
        </div>
    );
}

export default App;
