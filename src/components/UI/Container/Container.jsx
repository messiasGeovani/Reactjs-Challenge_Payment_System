import React, { useState, useEffect } from 'react'
// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css'

// Routes config
import { Link } from 'react-router-dom'

const Container = props => {

    return (
        <>
            <h3>{props.title}</h3>
            <br />
            <nav id="formNav" className="navbar navbar-dark bg-dark">
                <Link to={props.path}>
                    <button className="btn btn-primary">{props.btnText}</button>
                </Link>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </>
    )
}

export { Container }