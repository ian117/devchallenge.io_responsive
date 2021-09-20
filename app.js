require('dotenv').config()
const path = require('path')
const express = require('express')
let context = require('./context') 
const app = express()
const PORT = process.env.PORT || 2000

app.set('view engine', 'ejs')


app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    context.title = "Home"
    context.header_title = "Home"
    res.render(`pages/index`, {context})
})

app.get('/404', (req, res) => {
    context.title = "Not Found"
    context.header_title = "Error 404"
    res.render(`pages/404`, {context})
})

app.listen(PORT, () => {
    console.log(`Listenning on: http:localhost:${PORT}`)
})