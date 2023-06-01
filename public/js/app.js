// EXPRESS
const express = require('express')
const app = express()
const port = 8080
// EXPRESS STATIC FILE (CSS)
app.use(express.static('public'))

// ROUTES IMPORT
const router = require('../../config/routes')


app.set('view engine', 'ejs')


// BODYPARSER 
const bodyParser = require('body-parser')
// CREATE APPLICATION/JSON PARSER
app.use(bodyParser.json())
// CREATE APPLICATION/X-WWW-FORM-URLENCOTED PARSER
app.use(bodyParser.urlencoded({extended:false}))

// ROUTERS
app.use(router)

// LISTEN SERVER PORT 
app.listen(port, () => console.log('running'))