import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"

function App() {

  return (
    <>
      <header className="header">
        <h1>Buscador de Bebidas</h1>
      </header>
      <Container className="mt-5">
        <Formulario />
      </Container>
    </>
  )
}

export default App
