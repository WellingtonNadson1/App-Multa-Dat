// EXPRESS
const express = require('express')
const app = express()
const port = 8080

// ROUTES
const routes = require('./config/routes')

// EXPRESS STATIC FILE (CSS)
app.use(express.static('public'))

app.set('view engine', 'ejs')

// BodyParser 
const bodyParser = require('body-parser')
// const { urlencoded } = require('body-parser')

// CREATE APPLICATION/JSON PARSER
app.use(bodyParser.json())

// CREATE APPLICATION/X-WWW-FORM-URLENCOTED PARSER
app.use(bodyParser.urlencoded({extended:false}))


// ROUTERS
app.use(routes)


// LISTEN SERVER PORT 
app.listen(port, () => console.log(`Rodando na porta: ${port}`))