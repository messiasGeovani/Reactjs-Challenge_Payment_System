import React, { useState, useEffect } from 'react'
// link import
import { Link, Redirect } from 'react-router-dom'

// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css'

// api utils import
import { api } from '../../utils/api'

const Transaction = () => {

    const transaction = JSON.parse(localStorage.getItem('@Transaction'))
    const [redirect, setRedirect] = useState(false)

    const verifyRedirect = () => {
        if (redirect === true) {
            return <Redirect to="/transactions" />
        }
    }

    const verifyTransaction = () => {
        if (transaction === null) {
            return (
                <>
                    <h5>Transação não encontrada</h5>
                    <Link to="/transactions">
                        <button className="btn btn-primary">Voltar</button>
                    </Link>
                </>
            )
        } else {
            return (
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Remetente</th>
                            <th scope="col">Destinatário</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{transaction.sender}</th>
                            <td>{transaction.destination}</td>
                            <td>R$ {transaction.value}</td>
                            <td>
                                <Link to="/transactions/edit">
                                    <button className="btn btn-warning" onClick={() => {
                                        localStorage.setItem('@Bank:TransactionId', transaction._id)
                                    }}>editar</button>
                                </Link>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => {
                                    deleteTransaction(transaction._id)
                                }}>Remover</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
        }
    }

    const deleteTransaction = async transaction => {
        await api.delete(`/transaction?id=${transaction}`)
            .then(result => setRedirect(true))
            .catch(err => alert(err))
    }

    return (
        <>
            {verifyRedirect()}
            <h3 className="text-center">Transações</h3>
            <hr />
            <br />
            <div className="container text-center">
                {
                    verifyTransaction()
                }
            </div>
        </>
    )
}

export { Transaction }