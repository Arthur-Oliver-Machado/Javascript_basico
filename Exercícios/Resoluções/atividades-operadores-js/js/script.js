//Operadores Aritméticos

let n1 = 30;
let n2 = 37;
let numero = 7;
let resto = numero % 2;
let resultado = resto === 0;
let resultado2 = 2 ** 2;
let resultado3 = 2 ** 3;
let celsius = 3;
let fahrenheit = (celsius * 9/5) + 32;
let nota1 = 7.5;
let nota2 = 9.8;
let nota3 = 6.7;
let soma = nota1 + nota2 + nota3;
let media = soma/3;
let valorPago = 90
let precoProduto = 67
let troco = valorPago - precoProduto


console.log (n1 + n2);
console.log (n1/n2);
console.log (n1*n2);
console.log (resultado);
console.log (resultado2)
console.log (resultado3)
console.log (fahrenheit)
console.log (media)
console.log (troco)
/////////////////////////


//Operadores de Comparação

let numero1 = 100;
let numero2 = 67;
let comparacao = numero1 == numero2;
let numero3 = 50 ;
let numero4 = 25;
let maiorMenor = numero3 < numero4;
let notaAluno = 6.7;
let aprovadoReprovado = notaAluno >= 7
let idade = 67;
let maiorDezoito = idade >= 18;
let palavraString1 = "Palavra"
let palavraString2 = "Palavra difente"
let palavraString3 = "Palavra Igual"
let palavraString4 = "Palavra Igual"
let comparacaoPalavras = palavraString1 === palavraString2
let comparacaoPalavrasIguais = palavraString3 !== palavraString4;
let precoProduto2 = 67.67;
let estaNoIntervalo = (precoProduto2 >=10) && (precoProduto2 <=100);



console.log (comparacao)
console.log (maiorMenor)
console.log (aprovadoReprovado)
console.log (maiorDezoito)
console.log (comparacaoPalavras)
console.log (comparacaoPalavrasIguais)
console.log (estaNoIntervalo)
//////////////////////////////////////

// Operadores Lógicos

let numero5 = 167;
let restoNumero5 = numero5 %2;
let logico = (numero5 >0 && restoNumero5 ==0)
let loginUsuario = "Admin"
let verificarLogin = (loginUsuario === "Admin") || (loginUsuario === "root")
let logado = true;
let deslogado = !logado;
let idade2 = 50; 
let email = "userexample@gmail.com";
let validacaoCadastro = (idade2 =>18) && ( email !== "");
let ehAssinante = false;
let totalCompra = 250.00;
let temDesconto = ehAssinante || (totalCompra >=200.00);
let idade3 = 17;
let contaAtiva = true;
let banido = false;
let acessoRestrito = (idade3 >= 18) && contaAtiva && !banido;

console.log (logico)
console.log (verificarLogin)
console.log (deslogado)
console.log (validacaoCadastro)
console.log (temDesconto)
console.log (acessoRestrito)
///////////////////////////////