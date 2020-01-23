import React from 'react'
// card import
import { Card } from '../../UI/Card/Card'

const Clients = () => (
    <>
        <Card urlImg="..." path="/clients/register" title="Cadastrar cliente" btnText="Entrar" />
        <Card urlImg="..." path="/clients/search" title="Pesquisar cliente" btnText="Entrar" />
        <Card urlImg="..." path="/clients/show" title="Listar clientes" btnText="Entrar" />
    </>
)

export { Clients }