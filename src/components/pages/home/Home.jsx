import React from "react";
// card import
import { Card } from '../../UI/Card/Card'

// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => (
    <>
        <h3 className="text-center">Digital Bank</h3>
        <hr/>
        <br/>
        <Card urlImg="https://comps.canstockphoto.com/bank-manager-in-the-office-with-client-clip-art-vector_csp60367466.jpg" path="/clients" title="Clientes" btnText="Entrar" />
        <Card urlImg="https://www.callcentrehelper.com/images/stories/2017/10/bank-transaction-vector-760.png" path="/transactions" title="Transações" btnText="Entrar" />
    </>
)

export { Home }