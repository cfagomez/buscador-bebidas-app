import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"
import { CategoriaProvider } from "./context/CategoriaProvider"

function App() {

  return (
    <CategoriaProvider>
      <header className="header">
        <h1>Buscador de Bebidas</h1>
      </header>
      <Container className="mt-5">
        <Formulario />
      </Container>
    </CategoriaProvider>
  )
}

export default App
