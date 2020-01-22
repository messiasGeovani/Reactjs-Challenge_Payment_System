import React from "react";
// navbar import
import { Navbar } from '../UI/Navbar/Navbar'
// card import
import { Card } from '../UI/Card/Card'

export default function App() {

    return (
        <>
            <Navbar />
            <Card urlImg="..." title="Exibir todos os clientes " btnText="Mostrar" />
            <Card urlImg="..." title="Pesquisar por um cliente " btnText="Pesquisar" />
            <Card urlImg="..." title="Mostrar todas as tranções" btnText="Mostrar" />
            <Card urlImg="..." title="Pesquisar por uma tranção" btnText="Pesquisar" /> 
        </>
    )
}
