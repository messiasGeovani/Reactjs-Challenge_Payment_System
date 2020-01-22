import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Card = props => (
    <div class="card text-center">
        <img class="card-img-top" src={props.urlImg} />
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.text}</p>
            <a href="#" class="btn btn-primary">{props.btnText}</a>
        </div>
    </div>
)

export { Card }