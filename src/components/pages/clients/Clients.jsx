import React, { useState, useEffect } from 'react'
// link import
import { Link } from 'react-router-dom'

// container component
import { Container } from '../../UI/Container/Container'
// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css'

// api utils import
import { api } from '../../../utils/api'

const Clients = () => {

    const [clients, setClients] = useState([])
    const [update, setUpdate] = useState(0)

    const getClients = async () => {
        await api.get('/clients')
            .then(result => {
                setClients([
                    ...result.data
                ])
            })
            .catch(err => alert(err))
    }

    const deleteClient = async client => {
        await api.delete(`/client?id=${client}`)
            .then(result => {
                alert('The client was removed')
            })
            .catch(err => alert(err))
    }

    useEffect(() => {
        getClients()
    })

    console.log(clients)

    return (
        <>
            <div className="container text-center">
                <Container title="Clientes" btnText="Novo cliente" searchPath="/client" path="/clients/register" />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Cpf</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clients.map(item => (
                                <tr>
                                    <th scope="row">{item.name}</th>
                                    <td>{item.cpf}</td>
                                    <td>
                                        <Link to="/clients/edit">
                                            <button className="btn btn-warning" onClick={() => {
                                                localStorage.setItem('@Bank:ClientId', item._id)
                                            }}>editar</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => {
                                            deleteClient(item._id)
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

export { Clients }