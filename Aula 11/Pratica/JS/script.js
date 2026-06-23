function mostrarMensagem() {
    alert("Você clicou no botão, otario.")
}

function alterarTitulo() {
    document.getElementById("titulo").innerText = "Este titulo foi altetado com JavaScript";
}

function mostrarNome() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado").innerText = "Ola " + nome + "!";
} 

function verificarIdade() {
    let idade = Number(document.getElementById("idade").value);

    if (idade >=18) {
        document.getElementById("resultadoIdade").innerText = "Você é maior de idade"
    } else if (idade == 17) {
        document.getElementById("resultadoIdade").innerText = "Você é quase maior de idade."
    } else {
        document.getElementById("resultadoIdade").innerText = "Você é menor de idade"
    }
}

function alterarImagem() {
let img = document.getElementById("imagem")

 if (img.src.includes("IMGS/315371840_newjeans.jpg")) {
    img.src = "IMGS/NewJeans_Get_Up_Teaser_7.jpg"
 } else {
    img.src = "IMGS/315371840_newjeans.jpg"
 }
}