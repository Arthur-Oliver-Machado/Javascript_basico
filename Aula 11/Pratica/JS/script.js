// function mostrarMensagem() {
//     alert("Você clicou no botão, otario.")
// }

// function alterarTitulo() {
//     document.getElementById("titulo").innerText = "Este titulo foi altetado com JavaScript";
// }

// function mostrarNome() {
//     let nome = document.getElementById("nome").value;
//     document.getElementById("resultado").innerText = "Ola " + nome + "!";
// }

// function verificarIdade() {
//     let idade = Number(document.getElementById("idade").value);

//     if (idade >= 18) {
//         document.getElementById("resultadoIdade").innerText = "Você é maior de idade"
//     } else if (idade == 17) {
//         document.getElementById("resultadoIdade").innerText = "Você é quase maior de idade."
//     } else {
//         document.getElementById("resultadoIdade").innerText = "Você é menor de idade"
//     }
// }

// function alterarImagem() {
//     let img = document.getElementById("imagem")

//     if (img.src.includes("IMGS/315371840_newjeans.jpg")) {
//         img.src = "IMGS/NewJeans_Get_Up_Teaser_7.jpg"
//     } else {
//         img.src = "IMGS/315371840_newjeans.jpg"
//     }
// }

// function esconderTexto() {
//     document.getElementById("texto-2").style.display = "none";
// }

// function mostrarTexto() {
//     document.getElementById("texto-2").style.display = "block";
// }


// function criarParagrafo() {
//     let novoParagrafo = document.createElement("p");
//     novoParagrafo.innerText = "Este parágrafo foi criado com JavaScript.";

//     document.getElementById("area").appendChild(novoParagrafo);
// }


// function removerAviso() {
//     document.getElementById("aviso").remove();
// }


// function calcularIMC() {
//     let peso = Number(document.getElementById("peso").value);
//     let altura = Number(document.getElementById("altura").value);

//     let imc = peso / (altura * altura);

//     document.getElementById("resultado").innerText = "Seu IMC é: " + imc.toFixed(2);
// }

// function adicionarTarefa() {
//     let textoTarefa = document.getElementById("tarefa").value;

//     let item = document.createElement("li");

//     document.getElementById("lista").appendChild(item);

//     document.getElementById("tarefa").value = "";
// }


function adicionarTarefa() {
    let textoTarefa = document.getElementById("tarefa").value;

    // Se o usuário tentar adicionar uma tarefa vazia, a função para aqui
    if (textoTarefa.trim() === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    let item = document.createElement("li");
    
    // LINHA CORRIGIDA: Define o texto que vai dentro do <li>
    item.innerText = textoTarefa;

    document.getElementById("lista").appendChild(item);

    document.getElementById("tarefa").value = "";
}