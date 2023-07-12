//passo1 - pegar os personagens no JS para poder verificar quando o usuario passar o mouse em cima
const personagens = document.querySelectorAll('.personagem');    

//passo2 - adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top:0,  behavior: 'smooth'});
        }

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');  

        alterarImagemPersonagemSelecionado(personagem);
        
        alterarNomePersonagemSelecionado(personagem);
        
        alterarDescricaoPersonagem(personagem);

    })

})


function removerSelecaoDoPersonagem() {
    //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function alterarImagemPersonagemSelecionado(personagem) {
    //passo 4 - pegar o elemento do personagem grande pra adicionar as informações nele. 
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //passo 5 - alterar a imagem do personagem grande. 
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;
}

function alterarNomePersonagemSelecionado(personagem) {
    //passo 6 - alterar o nome do personagem grande.
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricaoPersonagem(personagem) {
    //passo 7 - alterar a descrição do personagem grande.
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}


