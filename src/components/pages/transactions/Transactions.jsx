import React, { useState, useEffect } from 'react'
// container component
import { Container } from '../../UI/Container/Container'

// link import
import { Link } from 'react-router-dom'

// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css'

// api utils import
import { api } from '../../../utils/api'

const Transactions = () => {

    const [transaction, setTransaction] = useState([])

    const getTransactions = async () => {
        await api.get('/transactions')
            .then(result => {
                setTransaction([
                    ...result.data
                ])
            })
            .catch(err => alert(err))
    }

    const deleteTransaction = async transaction => {
        await api.delete(`/transaction?id=${transaction}`)
            .then(result => {
                alert('The transaction was removed')
            })
            .catch(err => alert(err))
    }

    useEffect(() => {
        getTransactions()
    })

    console.log(transaction)

    return (
        <>
            <div className="container text-center">
                <Container title="Transações" btnText="Nova Transação" searchPath="/transaction" path="/transactions/register" />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Remetente</th>
                            <th scope="col">Destinatário</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transaction.map(item => (
                                <tr>
                                    <th scope="row">{item.sender}</th>
                                    <td>{item.destination}</td>
                                    <td>R$ {item.value}</td>
                                    <td>
                                        <Link to="/transactions/edit">
                                            <button className="btn btn-warning" onClick={() => {
                                                localStorage.setItem('@Bank:transactionId', item._id)
                                            }}>Editar</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => {
                                            deleteTransaction(item._id)
                                        }}>Remover</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export { Transactions }