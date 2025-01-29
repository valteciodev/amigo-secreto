// Cra um array (lista) para armazenar os nomes que forem informados.
let amigos = [];

function adicionarAmigo () {
    // Captura o valor do campo de texto quando o botão adicionar é clicado.
    let nome_amigo = document.querySelector("input").value;

    // Verica se o campo está vazio, se contém algum número e somente caracteres especiais.
    // Caso as condições sejam verdadeiras, entra na condição.
    if (nome_amigo && !/\d/.test(nome_amigo) && !/^[^a-zA-Z]+$/.test(nome_amigo)){
        
        // Verifica se o valor digitado jé existe no array;
        if (amigos.includes(nome_amigo)){
            // Existindo no array, emite uma mensagem e limpa o campo de texto.
            alert ("O nome já foi inserido!");
            limparCampo();
        } else {
            // Não existindo no array, adiciona ao fiinal da lista.
            amigos.push(nome_amigo);
            mostraNomes();
            limparCampo();
            // Caso já exista um nome sorteado, é setado para vazio.
            exibirTextoNaTela ("resultado", '');
        }

    } else {
        // Caso as confições sejam falsas, emite uma mensagem na tela e limpa o cmapo.
        alert ('Insira um nome válido!');
        limparCampo();
    }
};

// Limpa o campo de imput.
function limparCampo() {
    campoTexto = document.querySelector("input");
    campoTexto.value = '';
};

// Através do id consegue alterar os elementos exibidos na página.
function exibirTextoNaTela (id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
};

// Mostra os nomes inseridos na lista.
function mostraNomes() {
    // Captura a lista pelo id.
    let lista = document.getElementById("listaAmigos");
    // Limpa a lista para evitar duplicidade de elementos.
    lista.innerHTML = "";
    let i= 0;
    // Laço de repetição para percorrer a lista.
    while (i<amigos.length){
        // Cria um novo elemento com a tag de linha.
        let novoNome = document.createElement("li");
        // Altera o texto da linha.
        novoNome.textContent = amigos[i];
        // Adicona a linha à lista para ser exibido.
        lista.appendChild(novoNome);
        i++;
    };
};

// Sorteia o nome do amigo secreto.
function sortearAmigo() {
    // Captura o texto da tag onde será exibido o nome do sorteado pelo id.
    let resultado = document.getElementById('resultado').textContent;
    // Verifica se O resultado já foi exibido, validando se a string está vazia.
    if (!resultado) {
        // Verifica se a lista está vazia.
        if (amigos) {
            // Gera um número aleatório multiplicando pelo tamanho da lista.
            let amigoSorteado = Math.random() * amigos.length;
            // Caso o número gerado seja float, a função abaixo arredonda o valor para baixo.
            amigoSorteado = Math.floor(amigoSorteado);
            // Limpa a lista de amigos exibidos na página;
            exibirTextoNaTela ("listaAmigos", '');
            // Exibe o nome do amigo sorteado.
            exibirTextoNaTela ("resultado", amigos[amigoSorteado]);
            // Reseta a lista.
            amigos = [];
        } else {
            // Caso a lista esteja vazia, exibe a mesnsagem abaixo.
            alert ('Não existe nomes na lista!');
        }
    } else {
        // Caso a string esteja com conteúdo, exibe a mensagem abaixo.
        alert ('O nome já foi sorteado, sua lista foi reiniciada! Insira um novo nome!')
        // Remove o nome sorteado da tela
        exibirTextoNaTela ("resultado", '');

    }
};