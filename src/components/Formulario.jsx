import { Col, Form, Row } from "react-bootstrap"

const Formulario = () => {
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
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario