import React from 'react'
// link import
import { Link } from 'react-router-dom'
// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css'
// css import
import './Card.css'

const Card = props => (
    <div className="card text-center">
        <img className="card-img-top" src={props.urlImg} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <Link to={props.path}>
                <button className="btn btn-primary">{props.btnText}</button>
            </Link>
        </div>
    </div>
)

export { Card }