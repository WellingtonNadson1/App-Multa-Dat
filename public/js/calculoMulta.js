// MULTA
function Multa(infra_leve, infra_media, infra_grave, infra_gravissima, fator_risco_empresa, fator_area_empresa){

    // Valor Base Bombeiro Militar
    const vbbm = 32.21

    // Fator de Risco
    const fator_risco = [1, 1.1, 1.2]

    // Fator Área Edificada
    const fator_area = [4, 8, 12, 16, 24, 30, 37, 43, 50, 56, 63, 69, 76, 83, 89, 94, 100 ]

    const multa =
    (
        2.5 * parseInt(infra_leve) + 
        3.5 * parseInt(infra_media) + 
        5 * parseInt(infra_grave) + 
        7 * parseInt(infra_gravissima)
    )

    * fator_risco[parseInt(fator_risco_empresa)] 
    * fator_area[parseInt(fator_area_empresa)] 
    * vbbm

    return multa
}

module.exports = Multa