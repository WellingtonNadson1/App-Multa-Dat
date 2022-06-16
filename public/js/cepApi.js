const preencherForm = (dadosCep) => {
    document.getElementById('rua').value = dadosCep.logradouro
    document.getElementById('cidade').value = dadosCep.localidade
    document.getElementById('uf').value = dadosCep.uf
}


const pesquisarCep = async () => {
    const cepDigitado = document.querySelector('#cep').value

    //Nova variável "cep" somente com dígitos.
    var cep = cepDigitado.replace(/\D/g, '');
    console.log(cep)

    const url = `http://viacep.com.br/ws/${cep}/json/`

    const dadosCep = await fetch(url).then(resp => resp.json())

    preencherForm(dadosCep)
}

document.querySelector('#cep')
        .addEventListener('focusout', pesquisarCep)

console.log(pesquisarCep())