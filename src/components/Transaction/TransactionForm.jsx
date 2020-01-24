import React, { useState } from 'react'
// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css'

// link import
import { Link } from 'react-router-dom'

// api utils import
import { api } from '../../utils/api'

const TransactionForm = props => {

    const [sender, setSender] = useState('')
    const [destination, setDestination] = useState('')
    const [value, setValue] = useState(null)

    const method = props.method

    // name change function
    const handleSenderChange = e => {
        setSender(e.target.value)
        console.log(sender)
    }

    // cpf change function
    const handleDestinationChange = e => {
        setDestination(e.target.value)
        console.log(destination)
    }

    // password change function
    const handleValueChange = e => {
        setValue(e.target.value)
        console.log(value)
    }

    // send information function
    const handleSubmit = async e => {

        const data = {
            sender: sender,
            destination: destination,
            value: value
        }

        if (method === 'post') {
            await api.post('/transaction', data)
                .then(result => {
                    alert('Concluído.')
                })
                .catch(err => alert(err))
        } else {
            const id = localStorage.getItem('@Bank:transactionId')
            await api.put(`/transaction?id=${id}`, data)
                .then(result => {
                    alert('Concluído.')
                })
                .catch(err => alert(err))
        }

        e.preventDefalult()
    }

    return (
        <div className="container">
            <h3 className="text-center">{props.title}</h3>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Remetente</label>
                    <input type="text" className="form-control" placeholder="Digite seu nome" value={sender} onChange={handleSenderChange} required />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Destino</label>
                    <input type="text" className="form-control" placeholder="Digite o nome da pessoa que ira receber" value={destination} onChange={handleDestinationChange} required />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Valor</label>
                    <input type="number" className="form-control" placeholder="Digite o valor a ser enviado" value={value} onChange={handleValueChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
                <Link to="/transactions">
                    <button type="submit" className="btn btn-danger ml-3">Sair</button>
                </Link>
            </form>
        </div>
    )
}

export { TransactionForm }