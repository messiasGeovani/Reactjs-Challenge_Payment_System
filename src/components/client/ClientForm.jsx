import React, { useState } from 'react'
// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css'

// link import
import { Link, Redirect } from 'react-router-dom'

// api utils import
import { api } from '../../utils/api'

function ClientForm(props) {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState(null)
    const [password, setPassword] = useState('')

    const [redirect, setRedirect] = useState(false)

    const method = props.method

    // name change function
    const handleNameChange = e => {
        setName(e.target.value)
        console.log(name)
    }

    // cpf change function
    const handleCpfChange = e => {
        setCpf(e.target.value)
        console.log(cpf)
    }

    // password change function
    const handlePasswordChange = e => {
        setPassword(e.target.value)
        console.log(password)
    }

    // send information function
    const handleSubmit = async e => {

        const data = {
            name: name,
            cpf: cpf,
            password: password
        }

        if (method === 'post') {
            await api.post('/client', data)
                .then(result => {
                    alert('Concluído.')
                })
                .catch(err => alert(err))
        } else {
            const id = localStorage.getItem('@Bank:ClientId')
            await api.put(`/client?id=${id}`, data)
                .then(result => {
                    alert('Concluído.')
                })
                .catch(err => alert(err))
        }

        e.preventDefalult()

    }

    const verifyRedirect = () => {
        if (redirect === true) {
            return <Redirect to="/clients"/>
        }
    }

    return (
        <div className="container">
        {verifyRedirect()}
            <h3 className="text-center">{props.title}</h3>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Nome Completo</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu nome" value={name} onChange={handleNameChange} required />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">CPF</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu cpf" value={cpf} onChange={handleCpfChange} required />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Digite sua senha" value={password} onChange={handlePasswordChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
                <Link to="/clients">
                    <button type="submit" className="btn btn-danger ml-3">Sair</button>
                </Link>
            </form>
        </div>
    )
}

export { ClientForm }