// EXPRESS
const express = require('express')
const app = express()
const port = 8080

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
// Home Page (form)
app.get('/', function(req, res) {
    // res.sendFile(__dirname + '/index', )
    res.render('index')
})



// Page generation Task
app.post('/multa', function(req, res) {
    
    const nome_empresa = req.body.inputEmpresa
    const endereco_empresa = req.body.inputAddress
    const numero_endereco_empresa = req.body.inputNumberHome
    const city_empresa = req.body.inputCity
    const state_empresa = req.body.inputState
    const cep_empresa = req.body.inputCEP
    const risco_empresa = req.body.inputRisco
    const area_empresa = req.body.inputArea
    const infra_leve_empresa = req.body.inputInfraLeve
    const infra_media_empresa = req.body.inputInfraMedia
    const infra_grave_empresa = req.body.inputInfraGrave
    const infra_gravissima_empresa = req.body.inputInfraGravissima

    console.log(nome_empresa)
    console.log(endereco_empresa)
    

    // MULTA
    function Multa(){

        // Valor Base Bombeiro Militar
        const vbbm = 30.42

        // Fator de Risco
        const fator_risco = [1, 1.1, 1.2]

        // Fator Área Edificada
        const fator_area = [4, 8, 12, 16, 24, 30, 37, 43, 50, 56, 63, 69, 76, 83, 89, 94, 100 ]

        const multa = 
        (
            2.5 * parseInt(infra_leve_empresa) + 
            3.5 * parseInt(infra_media_empresa) + 
            5 * parseInt(infra_grave_empresa) + 
            7 * parseInt(infra_gravissima_empresa)
        )

        * fator_risco[parseInt(risco_empresa)] 
        * fator_area[parseInt(area_empresa)] 
        * vbbm

        return multa
    }

    const valorMulta = Multa().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    console.log(valorMulta)

    const formMulta = {
        nome_empresa : nome_empresa,
        endereco_empresa : endereco_empresa,
        numero_endereco_empresa : numero_endereco_empresa,
        city_empresa : city_empresa,
        state_empresa : state_empresa,
        cep_empresa : cep_empresa,
        risco_empresa : risco_empresa,
        area_empresa : area_empresa,
        infra_leve_empresa : infra_leve_empresa,
        infra_media_empresa : infra_media_empresa,
        infra_grave_empresa : infra_grave_empresa,
        infra_gravissima_empresa : infra_gravissima_empresa,
        multa_calculada : valorMulta
    }

    console.log(formMulta.multa_calculada)

    res.render('multa', { data : formMulta})
})


// LISTEN SERVER PORT 
app.listen(port, () => console.log(`Rodando na porta: ${port}`))