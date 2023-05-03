import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"
import { CategoriaProvider } from "./context/CategoriaProvider"
import { BebidasProvider } from "./context/BebidasProvider"

function App() {

  return (
    <CategoriaProvider>
      <BebidasProvider>
        <header className="header">
          <h1>Buscador de Bebidas</h1>
        </header>
        <Container className="mt-5">
          <Formulario />
        </Container>
      </BebidasProvider>
    </CategoriaProvider>
  )
}

export default App
