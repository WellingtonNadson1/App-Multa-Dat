// -- START Máscara para o Input Cep --
function cepMask(value){
    return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
}

document.querySelector('#cep').addEventListener('input', (e) =>{
        e.target.value = cepMask(e.target.value)
   }, false)
// -- END Máscara para o Input Cep --


// Preencher de forma automática os 
// campos do formulário após receber o valor do Cep

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('cep').value=("");
    document.getElementById('logradouro').value=("");
    document.getElementById('localidade').value=("");
    document.getElementById('inputNumberHome').value=("");
    document.getElementById('uf').value=("");
}


const cep = document.querySelector('#cep')

const preencherForm = (dadosCep) => {
    for (const campo in dadosCep){
        if (document.querySelector('#' + campo)){
            document.querySelector('#' + campo).value = dadosCep[campo]
        }
    }
}

cep.addEventListener('focusout', (e) => {
    if (e.target.value != '' && e.target.value.length == 9) {
        let search = cep.value.replace('-', '')
        const url = `http://viacep.com.br/ws/${search}/json/`
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }
        
        fetch(url, options)
        .then(response => {response.json()
            .then(dados => {
                if (dados.hasOwnProperty('erro')){
                    alert(`Erro na requisição: Cep Não Existe`)
                    limpa_formulário_cep()
                }
                else {
                    preencherForm(dados)
                }
            })
        })
        .catch((erro) => {
            alert(`Erro na requisição: ${erro}`)
            limpa_formulário_cep()
        })
    }
    else {
        alert(`Preenchar o Cep com os 8 números`)
    }
})