
export const valida = (input) => {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {   
        valueMissing: 'O campo Nome não pode estar vazio'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio',
        typeMismatch: 'O campo digitado não é válido'
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio',
        patternMismatch: 'A senha deve conter de 6 a 12 caracteres, pelo menos 1 letra maiúscula e 1 número e não deve conter símbolos'
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio',
        customError: 'Você deve ser maior de idade para se cadastrar!'
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

const mostraMensagemDeErro = (tipoDeInput, input) => {
    let mensagem = ''

    tiposDeErro.forEach(erro => {
        if(input.validity[erro])
        mensagem = mensagensDeErro[tipoDeInput][erro]
    })
    return mensagem
}

const validaDataNascimento = (input) => {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior de idade para se cadastrar!'
    }

    input.setCustomValidity(mensagem)
}

const maiorQue18 = (data) => {
    const dataAtual = new Date()

    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}