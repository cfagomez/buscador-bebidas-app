import {Modal, Image} from 'react-bootstrap'
import useBebidas from '../hook/useBebidas'

const ModalBebida = () => {

    const {modal, handleModal} = useBebidas()

  return (
    <Modal show={modal} onHide={handleModal}>
        <Image 
            //src={}
            //alt={}
        />
        <Modal.Header>
            <Modal.Title>
                {}
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