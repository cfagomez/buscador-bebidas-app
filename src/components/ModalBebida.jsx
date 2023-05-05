import {Modal, Image} from 'react-bootstrap'
import useBebidas from '../hook/useBebidas'

const ModalBebida = () => {

    const {modal, handleModal, receta} = useBebidas()

  return (
    <Modal show={modal} onHide={handleModal}>
        <Image 
            src={receta.strDrinkThumb}
            alt={`Imagen de ${receta.strDrink}`}
        />
        <Modal.Header>
            <Modal.Title>
                {receta.strDrink}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <h2>
                    Instrucciones
                </h2>
                {}
                <h2>
                    Ingredientes y Cantidades
                </h2>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default ModalBebida