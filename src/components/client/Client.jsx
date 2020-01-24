import React, { useState, useEffect } from 'react'
// link import
import { Link, Redirect } from 'react-router-dom'

// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css'

// api utils import
import { api } from '../../utils/api'

const Client = () => {

    const client = JSON.parse(localStorage.getItem('@Client'))
    const [redirect, setRedirect] = useState(false)

    const verifyRedirect = () => {
        if (redirect === true) {
            return <Redirect to="/clients" />
        }
    }

    const verifyClient = () => {
        if (client === null) {
            return (
                <>
                    <h5>Cliente não encontrado</h5>
                    <Link to="/clients">
                        <button className="btn btn-primary">Voltar</button>
                    </Link>
                </>
            )
        } else {
            return (
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Cpf</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{client.name}</th>
                            <td>{client.cpf}</td>
                            <td>
                                <Link to="/clients/edit">
                                    <button className="btn btn-warning" onClick={() => {
                                        localStorage.setItem('@Bank:ClientId', client._id)
                                    }}>editar</button>
                                </Link>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => {
                                    deleteClient(client._id)
                                }}>Remover</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
        }
    }

    const deleteClient = async client => {
        await api.delete(`/client?id=${client}`)
            .then(result => setRedirect(true))
            .catch(err => alert(err))
    }

    return (
        <>
            {verifyRedirect()}
            <h3 className="text-center">Clientes</h3>
            <hr />
            <br />
            <div className="container text-center">
                {
                    verifyClient()
                }
            </div>
        </>
    )
}

export { Client }