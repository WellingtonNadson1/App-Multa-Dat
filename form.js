const nameEmpresa = document.querySelector('#inputEmpresa');
const addressEmpresa = document.querySelector('#inputAddress');
const numberAddressEmpresa = document.querySelector('#inputNumberHome');
const cityEmpresa = document.querySelector('#inputCity');
const stateEmpresa = document.querySelector('#disabledTextInput');
const cepEmpresa = document.querySelector('#inputCEP');
const riscoEmpresa = document.querySelector('#inputRisco');
const areaEmpresa = document.querySelector('#inputArea');
const infraLeveEmpresa = document.querySelector('#inputInfraLeve')
const infraMediaEmpresa = document.querySelector('#inputInfraMedia')
const infraGraveEmpresa = document.querySelector('#inputInfraGrave')
const infraGravissimaEmpresa = document.querySelector('#inputInfraGravissima')
const btnCalcular = document.querySelector('#bntCalcular');


function DadosForm (event) {
    // event.preventDefault()
    const formFull = {
        name_Empresa : nameEmpresa.value,
        address_Empresa : addressEmpresa.value,
        number_AddressEmpresa : numberAddressEmpresa.value,
        city_Empresa : cityEmpresa.value,
        state_Empresa : stateEmpresa.value,
        cep_Empresa : cepEmpresa.value,
        risco_Empresa : riscoEmpresa.value,
        area_Empresa : areaEmpresa.value,
        address_Empresa : addressEmpresa.value,
        infra_LeveEmpresa : infraLeveEmpresa.value,
        infra_MediaEmpresa : infraMediaEmpresa.value,
        infra_GraveEmpresa : infraGraveEmpresa.value,
        infra_GravissimaEmpresa : infraGravissimaEmpresa.value,
    }
    
    return console.log(formFull)
}

const testse = btnCalcular.addEventListener('click', DadosForm)
