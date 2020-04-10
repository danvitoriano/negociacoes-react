import React, { useState, useContext } from "react";
import { NegociacoesContext } from '../../store'

export default () => {

    const data = useFormInput("")
    const quantidade = useFormInput("")
    const valor = useFormInput("")

    const [state, dispatch] = useContext(NegociacoesContext)

    const onSubmit = event => {
        event.preventDefault()
        dispatch({
            type: "ADD_NEGOCIACAO",
            payload: {
                data: data.value,
                quantidade: quantidade.value,
                valor: valor.value
            }
        })
    }

    return (
        <div id="negociacoes-form">
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="data">Data</label>
                    <input {...data} type="date" id="data" className="form-control" required autoFocus />
                </div>

                <div className="form-group">
                    <label htmlFor="quantidade">Quantidade</label>
                    <input
                        {...quantidade}
                        type="number"
                        min="1"
                        step="1"
                        id="quantidade"
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="valor">Valor</label>
                    <input
                        {...valor}
                        id="valor"
                        type="number"
                        className="form-control"
                        min="0.01"
                        step="0.01"
                        required
                    />
                </div>

                <button className="btn btn-primary" type="submit">Incluir</button>
            </form>
        </div>
    )
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const handleChange = e => {
        setValue(e.target.value)
    }
    return {
        value,
        onChange: handleChange
    }
}