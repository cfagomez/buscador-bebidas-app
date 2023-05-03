import { Button, Col, Form, Row, Alert } from "react-bootstrap"
import useCategoria from '../hook/useCategoria'
import useBebidas from '../hook/useBebidas'
import { useState } from "react"

const Formulario = () => {

    const {categorias} = useCategoria()

    const {consultarBebidas} = useBebidas()

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    const [alerta, setAlerta] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault()

        if (Object.values(busqueda).includes('')) {

            setAlerta('Todos los campos son obligatorios')

            return

        }

        setAlerta('')

        consultarBebidas(busqueda)

    }

  return (
    <Form
        onSubmit={handleSubmit}
    >
        {
            alerta && <Alert variant="danger" className="text-center">{alerta}</Alert>
        }
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nombre">
                        Nombre Bebida
                    </Form.Label>
                    <Form.Control 
                        type="text"
                        id="nombre"
                        placeholder="Ej: Tequila, Vodka"
                        name="nombre"
                        value={busqueda.nombre}
                        onChange={(e) => setBusqueda({
                            ...busqueda,
                            [e.target.name]: e.target.value
                        })}
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group>
                    <Form.Label htmlFor="categoria">
                        Categoria Bebida
                    </Form.Label>
                    <Form.Select
                        id="categoria"
                        name="categoria"
                        value={busqueda.categoria}
                        onChange={(e) => setBusqueda({
                            ...busqueda,
                            [e.target.name]: e.target.value
                        })}
                    >
                        <option>-- Selecione Categoria --</option>
                        {
                            categorias.map(categoria => (
                                <option key={categoria.strCategory}>{categoria.strCategory}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row md={3} className="justify-content-end mt-3">
         <Button
            variant="danger"
            className="text-uppercase"
            type="submit"
         >
            Buscar Bebidas
         </Button>
        </Row>
    </Form>
  )
}

export default Formulario