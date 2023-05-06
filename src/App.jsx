import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"
import { CategoriaProvider } from "./context/CategoriaProvider"
import { BebidasProvider } from "./context/BebidasProvider"
import ListadoBebidas from "./components/ListadoBebidas"
import ModalBebida from "./components/ModalBebida"

function App() {

  return (
    <CategoriaProvider>
      <BebidasProvider>
        <header className="header">
          <h1>Buscador de Bebidas</h1>
        </header>
        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas />
          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriaProvider>
  )
}

export default App
