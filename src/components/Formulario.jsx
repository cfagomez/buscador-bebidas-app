import { Col, Form, Row } from "react-bootstrap"
import useCategoria from '../hook/useCategoria'

const Formulario = () => {

    const {categorias} = useCategoria()

  return (
    <Form>
        <Row>
            <Col>
                <Form.Group>
                    <Form.Label htmlFor="nombre">
                        Nombre Bebida
                    </Form.Label>
                    <Form.Control 
                        type="text"
                        id="nombre"
                        placeholder="Ej: Tequila, Vodka"
                        name="nombre"
                    />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label htmlFor="categoria">
                        Categoria Bebida
                    </Form.Label>
                    <Form.Select
                        id="categoria"
                        name="categoria"
                    >
                        <option>-- Sellecione Categoria --</option>
                        {
                            categorias.map(categoria => (
                                <option key={categoria.strCategory}>{categoria.strCategory}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario