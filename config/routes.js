const express = require('express')
const router = express.Router()
const multa = require('../public/js/calculoMulta')

// Get the Home Page (form)
router.get('/', function(req, res) {
    // res.sendFile(__dirname + '/index', )
    res.render('index')
})


// Page generation Task with  method POST
router.post('/multa', function(req, res) {
    const body = req.body

    // MULTA
    const calcMulta = multa(body.inputInfraLeve, body.inputInfraMedia, body.inputInfraGrave, body.inputInfraGravissima, body.inputRisco, body.inputArea)

    const valorMulta = calcMulta.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    const formMulta = body
    
    formMulta.multa_calculada = valorMulta

    res.render('multa', { data : formMulta})
})

module.exports = router 