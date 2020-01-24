import React from 'react'
// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css'
// css import
import './Navbar.css'

// router config
import { Link } from 'react-router-dom'

const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Digital Bank</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link to="/">
                        <a class="nav-link">Home <span class="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/clients">
                        <a class="nav-link">Clientes</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/transactions">
                        <a class="nav-link">Transações</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
)

export { Navbar }