import React, { useContext } from "react";
import { NegociacoesContext } from "../../store";

export default () => {
    const [state] = useContext(NegociacoesContext);

    const total = state.negociacoes.reduce((total, item) => total + (item.quantidade * item.valor), 0.0)

    return (
        <div id="negociacao-list" className="py-3">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        state.negociacoes.map(
                            (item, index) =>
                                <tr key={index}>
                                    <td>{item.data}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.quantidade * item.valor}</td>
                                </tr>
                        )
                    }

                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="3"></td>
                        <td>
                            {Math.round(total * 100) / 100}
                        </td>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}