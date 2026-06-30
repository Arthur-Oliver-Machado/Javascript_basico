// let botao = document.getElementById("botao");


// botao.addEventListener("click", function() {
//     alert("Você cllicou otario")
// })

// function mostrarMensagem(){
//     alert("Olá!");
// };

// botao.addEventListener(
//     "click",
//     mostrarMensagem
// );

// function digitarMensagem(){
//     console.log(campo.value);
// }

// campo.addEventListener(
//     "click",
//     digitarMensagem
// )
const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});