import React from "react";
// router modules import
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
// navbar import
import { Navbar } from './UI/Navbar/Navbar'
// home page import
import { Home } from './pages/home/Home'

// clients page import
import { Clients } from './pages/clients/Clients'

// client form component
import { ClientForm } from './client/ClientForm'

// transactions page import
import { Transactions } from './pages/transactions/Transactions'

// transaction form import
import { TransactionForm } from './Transaction/TransactionForm'

const App = () => (
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route exact="true" path="/">
                    <Home />
                </Route>
                <Route exact="true" path="/clients">
                    <Clients />
                </Route>
                <Route path="/clients/register">
                    <ClientForm title="Cadastrar cliente" method="post" />
                </Route>
                <Route path="/clients/edit">
                    <ClientForm title="Editar cliente" method="put" />
                </Route>
                <Route exact="true" path="/transactions">
                    <Transactions />
                </Route>
                <Route path="/transactions/register">
                    <TransactionForm title="Realizar Tranzação" method="post" />
                </Route>
                <Route path="/transactions/edit">
                    <TransactionForm title="Editar Transação" method="put" />
                </Route>
            </Switch>
        </Router>
    </>
)

export { App }
