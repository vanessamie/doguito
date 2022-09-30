import { clienteService } from "../services/cliente-service.js"

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault()

    try {    
        const nome = evento.target.querySelector('[data-nome]').value
        const email = evento.target.querySelector('[data-email]').value
        
        await clienteService.criaCliente(nome, email)
        window.location.href = '../telas/cadastra_cliente_concluido.html'
    }
    catch(erro){
        console.error(erro)
        window.location.href = '../telas/erro.html'
    }
})