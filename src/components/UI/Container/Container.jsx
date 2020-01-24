import React, { useState, useEffect } from 'react'
// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css'

// Routes config
import { Link, Redirect } from 'react-router-dom'

import { api } from '../../../utils/api'

const Container = props => {

    const [text, setText] = useState('')
    const [redirect, setRedirect] = useState(false)

    const verifyRedirect = () => {
        if (redirect === true) {
            return <Redirect push to="/client"/>
        }
    }

    const handleInputChange = e => {
        setText(e.target.value)
        console.log(text)
    }

    const handleSubmit = e => {
        api.get(`/client?name=${text}`)
            .then(result => {
                if (result.data !== null) {
                    localStorage.setItem('@Client', JSON.stringify(result.data))
                    setRedirect(true)
                } else {
                    localStorage.removeItem('@Client')
                    alert('Cliente não encontrado.')
                }
                console.log(result.data)
            })

        e.preventDefault()
    }

    return (
        <>
        {verifyRedirect()}
            <h3>{props.title}</h3>
            <br />
            <nav id="formNav" className="navbar navbar-dark bg-dark">
                <Link to={props.path}>
                    <button className="btn btn-primary">{props.btnText}</button>
                </Link>
                <form className="form-inline" onSubmit={handleSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" value={text} onChange={handleInputChange} aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </>
    )
}

export { Container }