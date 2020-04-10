import React, { useReducer, createContext } from "react"
export const NegociacoesContext = createContext()

const initialState = {
    negociacoes: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_NEGOCIACAO":
            return {
                negociacoes: [...state.negociacoes, action.payload]
            }
        default:
            throw new Error()
    }

}

export const NegociacoesContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <NegociacoesContext.Provider value={[state, dispatch]}>
            {props.children}
        </NegociacoesContext.Provider>
    )
}