import { createContext, useEffect, useState } from "react"
import axios from "axios"

const BebidasContext = createContext()

const BebidasProvider = ({children}) => {

  const [bebidas, setBebidas] = useState([])
  const [modal, setModal] = useState(false)
  const [bebidaId, setBebidaId] = useState('')
  const [receta, setReceta] = useState('')

  useEffect(() => {

    if (!bebidaId) return

    obtenerReceta()

  }, [bebidaId])

  const consultarBebidas = async (datos) => {

    try {

      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${datos.nombre}&c=${datos.categoria}`
      const {data} = await axios(url)
      setBebidas(data.drinks)

    } catch (error) {

      console.log(error)

    }    

  }

  const handleModal = () => {

    setModal(!modal)

  }

  const handleBebidaId = (id) => {

    setBebidaId(id)

  }

  const obtenerReceta = async () => {

    try {

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
      const {data} = await axios(url)
      setReceta(data.drinks[0])

    } catch(error) {

      console.log(error)

    }

  }

  return (
    <BebidasContext.Provider value={{consultarBebidas, bebidas, handleModal, modal, handleBebidaId, receta, setReceta}}>
        {children}
    </BebidasContext.Provider>
  )
}

export {

  BebidasProvider

}

export default BebidasContext