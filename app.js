require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

async function conectarDB() {
    try {
        await mongoose.connect(process.env.token)
        console.log("Conexión a la base de datos exitosa")

    } catch (error) {
        console.log("Error al conectar a la base de datos: " + error)
    }
}

app.use(express.json())
app.use('/', express.static(path.resolve('views', 'home')))
app.use('/Login', express.static(path.resolve('views', 'login')))
app.use('/components', express.static(path.resolve('views', 'components')))
app.use('/Register', express.static(path.resolve('views', 'registro')))

module.exports = app