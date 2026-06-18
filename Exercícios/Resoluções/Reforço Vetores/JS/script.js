//Exercicio 1
/*
for(let i = 1; i <=10; i++) {
   console.log(i);
}*/
//Exercicio 2
/*
 for(let i= 0; i <=20; i++) {
    if(i%2==0)
        console.log(i)
 } */

//Exercicio 3

/*
for(let i=5; i >=0; i--){
    console.log(i)
} console.log("Lançamento") */

//Exercicio 4

/*
let numero = 7;

for(let i=1; i<10; i++){
    console.log(numero + " x " + i +" = " + (numero * i));
} */

//Exercicio 5

/*
let bateria = 100

while (bateria > 0){
    console.log("Bateria: " + bateria + "%");
    bateria -= 10;
} */

//Exercicio 6

/*
let opcao = 0
do {


    opcao = prompt("Vamos jogar! Escolha uma opção: 1 - Jogar 2 - Ranking 3 - Sair")
    let creditos = 30
    let ranking = "Seu ranking é 10"

    if (opcao == 1) {
        while (creditos > 0) {
            alert("Tentando jogar...");
            console.log("Creditos disponiveis" + " = " + creditos)
            creditos -= 10
        }
        alert("Seus créditos acabaram")
    } else if (opcao == 2) {
        alert(ranking);
    } else {
        alert("Saindo")
    }
} while (opcao != 3)
*/

//Exercicio 6

/*
let filmes = [
    "Until Dawn o filme",
    "Como eu era antes de você",
    "A cinco passos de você",
    "Para todos os garotos que ja amei",
    "Meu namorado é um zumbi"
]

for(let i =0; i<filmes.length; i++){
    console.log(filmes[i])
} */

//Exercicio 7 e 8

/*
let notas = [7, 8, 10, 5];
let resultado = (notas[0] + notas[1] + notas[2] + notas[3]);
let media = (resultado/4);

console.log(resultado);
console.log(media);*/

//Exercicio 9 

/*
let idades = [15, 18, 22, 13, 30];

console.log(idades[4])*/

//Exercicio 10

/*
let precos = [10.50, 25.00, 8.99, 12.75];

console.log(precos[2])*/

//Projeto final da aula

//Cadastro

let jogadores = []

let pontos = []


for (let i = 0; i <3; i++){

    let nome= prompt("Digite o nome: ")

    let pontuacao = Number(
        prompt("Digite a pontuação: ")
    )

    jogadores.push(nome);
    pontos.push(pontuacao);
}

//Ranking 

for(let i= 0; i <jogadores.length; i++){

    console.log(jogadores[i] + " = " + pontos[i]) 
}