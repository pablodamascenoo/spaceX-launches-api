<p align="center">
  <a href="https://github.com/pablodamascenoo/spaceX-launches-api">
    <img src="./.github/rocket.svg" alt="readme-logo" width="80" height="80">

  </a>

  <h1 align="center">
    SpaceX Launches
  </h1>
</p>

<div align="center">
  <h3>Feito com:</h3>

  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" height="30px"/>
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>  
  
</div>

## Descrição:

O SpaceX launches API foi feito com o intuito de consumir a API [SpaceX-API](https://github.com/r-spacex/SpaceX-API) e retornar para o front-end [spaceX-launches](https://github.com/pablodamascenoo/spaceX-launches) apenas os dados relevantes além de facilitar a paginação.

<h3 align="center">

<a  href="https://pd-spacex-api.herokuapp.com/"/>

«Link da API»

</a>

</h3>

## Instalação:

```bash
$ git clone https://github.com/pablodamascenoo/spaceX-launches-api.git
$ cd spaceX-launches-api
$ npm i
```

Siga o [.env.example](.env.example) para criar seu próprio .env

## Uso:

- rodar em modo de desenvolvimento:

```bash
$ npm run dev
```

## Rotas:

```

- GET /past
    - Rota para listar lançamentos passados
    - headers: {}
    - body: {}
    - query: {
        page?: number
    }

- GET /upcoming
    - Rota para listar os próximos lançamentos
    - headers: {}
    - body: {}
    - query: {
        page?: number
    }

- GET /latest
    - Rota para listar o último lançamento feito
    - headers: {}
    - body: {}

- GET /next
    - Rota para listar o próximo lançamento
    - headers: {}
    - body: {}

- GET /:id
    - Rota para listar o lançamento por id
    - headers: {}
    - body: {}
```
