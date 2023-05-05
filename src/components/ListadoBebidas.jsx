import useBebidas from '../hook/useBebidas'
import { Row } from 'react-bootstrap'
import Bebida from './Bebida'

const ListadoBebidas = () => {

    const {bebidas} = useBebidas()

  return (
    <Row className='mt-3'>
        {
            bebidas.map(bebida => (

                <Bebida 
                    bebida={bebida}
                    key={bebida.idDrink}
                />

            ))
        }
    </Row>
  )
}

export default ListadoBebidas