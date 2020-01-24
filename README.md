# Reactjs-Challenge_Payment_System
> A simple payment system api with nodejs

## Installation

To install and config the project dependencies, is recommended the [yarn](https://yarnpkg.com/lang/en/) package manager.

```sh
yarn install
```

However, you also can use [npm](https://www.npmjs.com/get-npm).

```sh
npm install
```

## Usage manual

- ### Routes guide

The project contains the current routes:

| Method  |  Uri | Functionality  | Content-Type  |
|---|---|---|---|
| POST  | /client  | Create a client.  | JSON  |
| GET  | /clients  | Get all clients.  | JSON  |
| GET  | /client  | Get a single client.  | JSON  |
| PUT  | /client  | Update a client.  | JSON  |
| DELETE  | /client  | delete a client.  | JSON  |
| POST  | /transaction  | create a transaction.  | JSON  |
| GET  | /transactions  | Get all transactions.  | JSON  |
| GET  | /transaction  | Get a single transaction.  | JSON  |
| PUT  | /transaction  | Update a transaction.  | JSON  |
| DELETE  | /transaction  | Delete a transaction.  | JSON  |

## Project estructure

This project was created using the [express framework](https://expressjs.com/) to create the server routes and middlewares:

```bash
└── src
    ├── app
    │   ├── controller
    |   │   ├── ClientController.js
    |   |   └── TransactionController.js
    │   └── models
    |       ├── Client.js
    |       ├── Transaction.js
    |       └── index.js
    ├── config
    |   └── database.js
    |    
    ├── app.js
    ├── routes.js
    └── server.js
```

## Project database

The MongoDB Data Base Management System was used to store the application data:

### Client Schema

```
 {
     name: String,
     cpf: Number,
     password: String
 }
```

### Transaction Schema

```
 {
     sender: String,
     destination: String,
     value: Number
 }
```

## Meta

Linkedin Profile – [Messias Geovani](https://www.linkedin.com/in/messias-geovani-00125416a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGnSoFwiETD%2BtGrv4dF9mSw%3D%3D) 

Email – messias.geovani.lima@gmail.com

Github profile – [messiasGeovani](https://github.com/messiasGeovani)

## Contributing

1. Fork it (<https://https://github.com/messiasGeovani/Reactjs-Challenge_Payment_System/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
