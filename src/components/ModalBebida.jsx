import {Modal, Image} from 'react-bootstrap'
import useBebidas from '../hook/useBebidas'

const ModalBebida = () => {

    const {modal, handleModal, receta, setReceta} = useBebidas()

    const mostrarIngredientes = () => {

        let ingredientes = []

        for (let i = 1; i < 16; i++) {

            if (receta[`strIngredient${i}`]) {

                ingredientes.push(

                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>

                )

            }

        }

        return ingredientes

    }

  return (
    <Modal 
        show={modal} 
        onHide={() => {

            handleModal(),
            setReceta('')

    }
}>
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
                {receta.strInstructions}
                <h2>
                    Ingredientes y Cantidades
                </h2>
                {mostrarIngredientes()}
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default ModalBebida