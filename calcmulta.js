
// Valor Base Bombeiro Militar
const vbbm = 30.42

// Fator de Risco
const fator_risco = [1, 1.1, 1.2]

// Fator Área Edificada
const fator_area = [4, 8, 12, 16, 24, 30, 37, 43, 50, 56, 63, 69, 76, 83, 89, 94, 100 ]



// Lista de Infrações
const infra_leve = 0
const infra_media = 0
const infra_grave = 0
const infra_gravissima = 0

const form = document.querySelector('#form')
const nome_Empresa = document.querySelector('#inputEmpresa')

// form.addEventListener('submit', function(e) {
//     // alerta o valor do campo
//     alert(nome_Empresa.value);
//     console.log(nome_Empresa)

//     // impede o envio do form
//     // e.preventDefault();
// });

const questions = [
    'Qual o nome do Empreendimento que será Multado: ',
    `Informe qual o Fator de Risco do Empreendimento: 
    0 - Risco Baixo (até 300 MJ/m²)
    1 - Risco Médio (Entre 300 e 1.200 MJ/m²)
    2 - Risco Alto (Acima de 1.200 MJ/m²)\n`,
    `Informe o tamnaho da Área Edificada: 
    0 - (até 200)
    1 - (> 200 ≤ 500)
    2 - (> 500 ≤ 750)
    3 - (> 750 ≤ 1.500)
    4 - (> 1.500 ≤ 2.500)
    5 - (> 2.500 ≤ 3.500)
    6 - (> 3.500 ≤ 5.000)
    7 - (> 5.000 ≤ 7.000)
    8 - (> 7.000 ≤ 10.000)
    9 - (> 10.000 ≤ 20.000)
    10 - (> 20.000 ≤ 30.000)
    11 - (> 30.000 ≤ 40.000)
    12 - (> 40.000 ≤ 50.000)
    13 - (> 50.000 ≤ 60.000)
    14 - (> 60.000 ≤ 80.000)
    15 - (> 80.000 ≤ 100.000)
    16 - (> 100.000' : 100)\n`,
    'Quantas Infrações LEVES foram observadas: ',
    'Quantas Infrações MÉDIAS foram observadas: ',
    'Quantas Infrações GRAVES foram observadas: ',
    'Quantas Infrações GRAVÍSSIMAS foram observadas: '
]
console.log('Olá, Seja Bem-vindo ao App de Multas - DAT \n')



const empreendimento = []


// Formula de Calculo da Multa
const multa = (2.5 * parseInt(empreendimento[3]) + 3.5 * parseInt(empreendimento[4]) + 5 * parseInt(empreendimento[5]) + 7 * parseInt(empreendimento[6])) * fator_risco[parseInt(empreendimento[1])] * fator_area[parseInt(empreendimento[2])] * vbbm

console.log(`Fica Multado no valor de ${multa.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
