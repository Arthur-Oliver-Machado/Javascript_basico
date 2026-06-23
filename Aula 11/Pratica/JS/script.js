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