import { createContext, useContext, useReducer } from "react"

export const DataLayerContext = createContext()

export const StateProvider = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useStateProviderValue = () => useContext(DataLayerContext)
