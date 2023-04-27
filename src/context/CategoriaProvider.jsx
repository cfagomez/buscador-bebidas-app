import { createContext } from "react"

const CategoriaContext = createContext()

const CategoriaProvider = ({children}) => {
  return (
    <CategoriaContext.Provider value={{}}>
        {children}
    </CategoriaContext.Provider>
  )
}

export {

    CategoriaProvider

}

export default CategoriaContext