/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
*/

//OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
//  passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles ---- // const botao = document.getElementById('chopper'); //Pega um elemento do HTML pelo id / const != let
const botoes = document.querySelectorAll('.botao') //Serve para selecionar e buscar varios elemetos do HTML pelo atributo do seletor dele // () => { } Afunção Seta serve para disparar uma ação

//OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
//passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {         // Função forEach percorre a lista de botoes e indices pela a posição
  botao.addEventListener("click", () => {   // Adiciona um ouvinte de evento no Elemento
    
    desselecionarBotão(); //passo 1.3

    botao.classList.add("selecionado");// passo 1.2 // classList - Retorna uma lista de Classes do Elemento / E add uma class nova nesse botão

    //passo 2.3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado")// classList - Retorna uma lista de Classes do Elemento / E remove uma class nova nesse botão

    //passo 2.2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
    personagens[indice].classList.add("selecionado")
  });
})

function desselecionarBotão() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");// classList - Retorna uma lista de Classes do Elemento / E remove uma class nova nesse botão
}

