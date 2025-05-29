// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// middlewares para ler JSON
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

// rota inicial
app.get('/', (req, res) => {
    res.json({ message: 'oi express!' })
})

// credenciais MongoDB
const DB_USER = 'felipecamargobr10'
const DB_PASSWORD = encodeURIComponent('Do6gPMD3dzC14upF')

// conexão com MongoDB
mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@barbeariauc.nqrk53x.mongodb.net/?retryWrites=true&w=majority&appName=barbeariauc`
    )
    .then(() => {
        console.log('Conectamos ao MongoDB!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))
