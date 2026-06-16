// let nums1 = parseFloat (prompt("Digite um número"));
// let nums2 = parseFloat (prompt("Digite um número"));

// if (nums1 > nums2) {
//     alert(`O Maior número é ${nums1}`);
// } else if (nums2 > nums1) {
//     alert(`O Maior número é ${nums2}`); 
// } else {
//     alert('Ambos tem mesmo valor'); 
// }

// let calc = parseFloat(prompt("Digite o valor de X na equação a**2+bx+c=42 sendo que a=1; b=-10; c=67"));


// if (calc ===5) {
//     alert("O Valor esta correto");
// } else if (calc >0) {
//     alert("Valor incorreto, porém positivo");
// } else if (calc <40) {
//     alert("Valor incorreto e negativo");
// }

// let sexo = String(prompt("Digite seu sexo."));

// switch (sexo.toUpperCase()) {
//     case "F":
//     case "FEMININO":
//         alert("F --> Feminino");
//         break;
//     case "M":
//     case "MASCULINO":
//         alert("M --> Masculino")
//         break;
//     default:
//         alert("Invalido")
// }

// let entrada = prompt("Digite uma letra:");


// if (entrada) {
//     let letra = entrada.toUpperCase().trim();

//     if (letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
//         alert("É uma VOGAL");
//     } else {
//         alert("É uma CONSOANTE");
//     }
// } else {
//     alert("Você cancelou ou não digitou nada!");
// }
// let nota;
// let nota2;

// nota = Number(prompt("Digite a primeira nota"));
// nota2 = Number(prompt("Digite a segunda nota"));

// let media = (nota + nota2) /2;


// if (media ===10) {
// alert("Aprovado")
// } else if (media >=7){
// alert("Aprovado com Distinção")
// } else {
//     alert("Reprovado")
// }

// =================================================================
// 6. Maior de três números
// =================================================================
// let num1_ex6 = parseFloat(prompt("(Ex 6) Digite o primeiro número:"));
// let num2_ex6 = parseFloat(prompt("(Ex 6) Digite o segundo número:"));
// let num3_ex6 = parseFloat(prompt("(Ex 6) Digite o terceiro número:"));

// let maior_ex6 = num1_ex6;
// if (num2_ex6 > maior_ex6) maior_ex6 = num2_ex6;
// if (num3_ex6 > maior_ex6) maior_ex6 = num3_ex6;

// alert("O maior número é: " + maior_ex6);


// // =================================================================
// // 7. Maior e menor de três números
// // =================================================================
// let num1_ex7 = parseFloat(prompt("(Ex 7) Digite o primeiro número:"));
// let num2_ex7 = parseFloat(prompt("(Ex 7) Digite o segundo número:"));
// let num3_ex7 = parseFloat(prompt("(Ex 7) Digite o terceiro número:"));

// let maior_ex7 = num1_ex7;
// let menor_ex7 = num1_ex7;

// if (num2_ex7 > maior_ex7) maior_ex7 = num2_ex7;
// if (num3_ex7 > maior_ex7) maior_ex7 = num3_ex7;

// if (num2_ex7 < menor_ex7) menor_ex7 = num2_ex7;
// if (num3_ex7 < menor_ex7) menor_ex7 = num3_ex7;

// alert("Maior: " + maior_ex7 + "\nMenor: " + menor_ex7);


// // =================================================================
// // 8. Produto mais barato
// // =================================================================
// let preco1 = parseFloat(prompt("(Ex 8) Preço do produto 1:"));
// let preco2 = parseFloat(prompt("(Ex 8) Preço do produto 2:"));
// let preco3 = parseFloat(prompt("(Ex 8) Preço do produto 3:"));

// if (preco1 < preco2 && preco1 < preco3) {
//     alert("Você deve comprar o Produto 1 (Mais barato).");
// } else if (preco2 < preco1 && preco2 < preco3) {
//     alert("Você deve comprar o Produto 2 (Mais barato).");
// } else {
//     alert("Você deve comprar o Produto 3 (Mais barato).");
// }


// // =================================================================
// // 9. Ordem decrescente
// // =================================================================
// let a_ex9 = parseFloat(prompt("(Ex 9) Digite o primeiro número:"));
// let b_ex9 = parseFloat(prompt("(Ex 9) Digite o segundo número:"));
// let c_ex9 = parseFloat(prompt("(Ex 9) Digite o terceiro número:"));

// if (a_ex9 >= b_ex9 && a_ex9 >= c_ex9) {
//     if (b_ex9 >= c_ex9) alert(`${a_ex9}, ${b_ex9}, ${c_ex9}`);
//     else alert(`${a_ex9}, ${c_ex9}, ${b_ex9}`);
// } else if (b_ex9 >= a_ex9 && b_ex9 >= c_ex9) {
//     if (a_ex9 >= c_ex9) alert(`${b_ex9}, ${a_ex9}, ${c_ex9}`);
//     else alert(`${b_ex9}, ${c_ex9}, ${a_ex9}`);
// } else {
//     if (a_ex9 >= b_ex9) alert(`${c_ex9}, ${a_ex9}, ${b_ex9}`);
//     else alert(`${c_ex9}, ${b_ex9}, ${a_ex9}`);
// }


// // =================================================================
// // 10. Turno de estudo
// // =================================================================
// let turno = prompt("(Ex 10) Turno que estuda? (M-Matutino, V-Vespertino, N-Noturno)").toUpperCase().trim();

// if (turno === "M") {
//     alert("Bom dia!");
// } else if (turno === "V") {
//     alert("Boa tarde!");
// } else if (turno === "N") {
//     alert("Boa noite!");
// } else {
//     alert("Valor inválido");
// }


// // =================================================================
// // 11. Reajuste salarial
// // =================================================================
// let salarioAtual = parseFloat(prompt("(Ex 11) Digite o salário atual:"));
// let percentual = 0;

// if (salarioAtual <= 280) percentual = 20;
// else if (salarioAtual <= 700) percentual = 15;
// else if (salarioAtual <= 1500) percentual = 10;
// else percentual = 5;

// let valorAumento = salarioAtual * (percentual / 100);
// let novoSalario = salarioAtual + valorAumento;

// alert(
//     `Salário antes do reajuste: R$ ${salarioAtual.toFixed(2)}\n` +
//     `Percentual aplicado: ${percentual}%\n` +
//     `Valor do aumento: R$ ${valorAumento.toFixed(2)}\n` +
//     `Novo salário: R$ ${novoSalario.toFixed(2)}`
// );


// // =================================================================
// // 12. Folha de pagamento
// // =================================================================
// let valorHora = parseFloat(prompt("(Ex 12) Valor da hora trabalhada:"));
// let horasTrabalhadas = parseFloat(prompt("(Ex 12) Quantidade de horas no mês:"));

// let salarioBruto = valorHora * horasTrabalhadas;
// let percentualIR = 0;

// if (salarioBruto <= 900) percentualIR = 0;
// else if (salarioBruto <= 1500) percentualIR = 5;
// else if (salarioBruto <= 2500) percentualIR = 10;
// else percentualIR = 20;

// let descontoIR = salarioBruto * (percentualIR / 100);
// let descontoINSS = salarioBruto * 0.10;
// let sindicato = salarioBruto * 0.03;
// let fgts = salarioBruto * 0.11;

// let totalDescontos = descontoIR + descontoINSS + sindicato;
// let salarioLiquido = salarioBruto - totalDescontos;

// console.log(`Salário Bruto (${valorHora} * ${horasTrabalhadas}) : R$ ${salarioBruto.toFixed(2)}`);
// console.log(`(-) IR (${percentualIR}%)                 : R$ ${descontoIR.toFixed(2)}`);
// console.log(`(-) INSS (10%)              : R$ ${descontoINSS.toFixed(2)}`);
// console.log(`FGTS (11%)                  : R$ ${fgts.toFixed(2)}`);
// console.log(`Total de descontos          : R$ ${totalDescontos.toFixed(2)}`);
// console.log(`Salário Líquido             : R$ ${salarioLiquido.toFixed(2)}`);


// // =================================================================
// // 13. Dia da semana
// // =================================================================
// let numDia = parseInt(prompt("(Ex 13) Digite um número de 1 a 7 para o dia:"));

// switch (numDia) {
//     case 1: alert("Domingo"); break;
//     case 2: alert("Segunda"); break;
//     case 3: alert("Terça"); break;
//     case 4: alert("Quarta"); break;
//     case 5: alert("Quinta"); break;
//     case 6: alert("Sexta"); break;
//     case 7: alert("Sábado"); break;
//     default: alert("Valor inválido");
// }


// // =================================================================
// // 14. Conceito por média
// // =================================================================
// let nota1 = parseFloat(prompt("(Ex 14) Digite a primeira nota:"));
// let nota2 = parseFloat(prompt("(Ex 14) Digite a segunda nota:"));
// let media = (nota1 + nota2) / 2;
// let conceito = "";
// let situacao = "";

// if (media >= 9.0 && media <= 10.0) conceito = "A";
// else if (media >= 7.5) conceito = "B";
// else if (media >= 6.0) conceito = "C";
// else if (media >= 4.0) conceito = "D";
// else conceito = "E";

// if (conceito === "A" || conceito === "B" || conceito === "C") situacao = "APROVADO";
// else situacao = "REPROVADO";

// alert(`Notas: ${nota1} e ${nota2}\nMédia: ${media.toFixed(1)}\nConceito: ${conceito}\nSituação: ${situacao}`);


// =================================================================
// 15. Tipos de triângulo
// =================================================================
// let l1 = parseFloat(prompt("(Ex 15) Lado 1:"));
// let l2 = parseFloat(prompt("(Ex 15) Lado 2:"));
// let l3 = parseFloat(prompt("(Ex 15) Lado 3:"));

// if ((l1 + l2 > l3) && (l1 + l3 > l2) && (l2 + l3 > l1)) {
//     if (l1 === l2 && l2 === l3) alert("Triângulo Equilátero");
//     else if (l1 === l2 || l1 === l3 || l2 === l3) alert("Triângulo Isósceles");
//     else alert("Triângulo Escaleno");
// } else {
//     alert("Não formam um triângulo.");
// }


// // =================================================================
// // 16. Equação do segundo grau
// // =================================================================
// let a_ex16 = parseFloat(prompt("(Ex 16) Digite o valor de a:"));

// if (a_ex16 === 0) {
//     alert("A equação não é de segundo grau.");
// } else {
//     let b_ex16 = parseFloat(prompt("(Ex 16) Digite o valor de b:"));
//     let c_ex16 = parseFloat(prompt("(Ex 16) Digite o valor de c:"));
    
//     let delta = (b_ex16 * b_ex16) - (4 * a_ex16 * c_ex16);
    
//     if (delta < 0) {
//         alert("Não possui raízes reais.");
//     } else if (delta === 0) {
//         let r = -b_ex16 / (2 * a_ex16);
//         alert(`Possui uma raiz real: ${r}`);
//     } else {
//         let r1 = (-b_ex16 + Math.sqrt(delta)) / (2 * a_ex16);
//         let r2 = (-b_ex16 - Math.sqrt(delta)) / (2 * a_ex16);
//         alert(`Raiz 1: ${r1.toFixed(2)}\nRaiz 2: ${r2.toFixed(2)}`);
//     }
// }


// // =================================================================
// // 17. Ano bissexto
// // =================================================================
// let ano = parseInt(prompt("(Ex 17) Digite o ano:"));

// if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
//     alert("É BISSEXTO.");
// } else {
//     alert("NÃO É bissexto.");
// }


// // =================================================================
// // 18. Par ou ímpar
// // =================================================================
// let num_ex18 = parseInt(prompt("(Ex 18) Digite um número inteiro:"));

// if (num_ex18 % 2 === 0) alert("O número é PAR.");
// else alert("O número é ÍMPAR.");


// // =================================================================
// // 19. Características de um número
// // =================================================================
// let num_ex19 = parseFloat(prompt("(Ex 19) Digite um número:"));
// let parImpar = (num_ex19 % 2 === 0) ? "Par" : "Ímpar";
// let posNeg = (num_ex19 >= 0) ? "Positivo" : "Negativo";

// alert(`O número ${num_ex19} é ${parImpar} e ${posNeg}.`);


// // =================================================================
// // 20. Investigação criminal
// // =================================================================
// let q1 = parseInt(prompt("(Ex 20) Telefonou para a vítima? (1-Sim / 0-Não)"));
// let q2 = parseInt(prompt("(Ex 20) Esteve no local do crime? (1-Sim / 0-Não)"));
// let q3 = parseInt(prompt("(Ex 20) Mora perto da vítima? (1-Sim / 0-Não)"));
// let q4 = parseInt(prompt("(Ex 20) Devia para a vítima? (1-Sim / 0-Não)"));
// let q5 = parseInt(prompt("(Ex 20) Já trabalhou com a vítima? (1-Sim / 0-Não)"));

// let totalPositivas = q1 + q2 + q3 + q4 + q5;

// if (totalPositivas === 2) alert("Classificação: Suspeita");
// else if (totalPositivas === 3 || totalPositivas === 4) alert("Classificação: Cúmplice");
// else if (totalPositivas === 5) alert("Classificação: Assassino");
// else alert("Classificação: Inocente");


// // =================================================================
// // 21. Maior e menor entre dois números
// // =================================================================
// let n1_ex21 = parseFloat(prompt("(Ex 21) Digite o primeiro número:"));
// let n2_ex21 = parseFloat(prompt("(Ex 21) Digite o segundo número:"));

// if (n1_ex21 > n2_ex21) alert(`Maior: ${n1_ex21}\nMenor: ${n2_ex21}`);
// else if (n2_ex21 > n1_ex21) alert(`Maior: ${n2_ex21}\nMenor: ${n1_ex21}`);
// else alert("Os números são iguais.");


// // =================================================================
// // 22. Maior e menor entre três inteiros (Desafio - Usando Math)
// // =================================================================
// let n1_ex22 = parseInt(prompt("(Ex 22) Número 1:"));
// let n2_ex22 = parseInt(prompt("(Ex 22) Número 2:"));
// let n3_ex22 = parseInt(prompt("(Ex 22) Número 3:"));

// let maior_ex22 = Math.max(n1_ex22, n2_ex22, n3_ex22);
// let menor_ex22 = Math.min(n1_ex22, n2_ex22, n3_ex22);

// alert(`Maior: ${maior_ex22}\nMenor: ${menor_ex22}`);


// // Nota: O exercício 23 foi ignorado aqui por ser na linguagem C.


// // =================================================================
// // 24. Circunferência
// // =================================================================
// let raio = parseFloat(prompt("(Ex 24) Digite o raio da circunferência:"));

// let diametro = 2 * raio;
// let comprimento = 2 * Math.PI * raio;
// let area = Math.PI * (raio * raio);

// alert(`Diâmetro: ${diametro.toFixed(2)}\nComprimento: ${comprimento.toFixed(2)}\nÁrea: ${area.toFixed(2)}`);


// // =================================================================
// // 25. Doação de sangue
// // =================================================================
// let idade = parseInt(prompt("(Ex 25) Digite a sua idade:"));

// if (idade >= 18 && idade <= 67) alert("Você PODE doar sangue!");
// else alert("Você NÃO PODE doar sangue.");


// // =================================================================
// // 26. Validação de data
// // =================================================================
// let dia = parseInt(prompt("(Ex 26) Digite o dia:"));
// let mes = parseInt(prompt("(Ex 26) Digite o mês:"));
// let ano_ex26 = parseInt(prompt("(Ex 26) Digite o ano:"));

// if (ano_ex26 !== 2013) alert("Data Inválida: O ano deve ser 2013.");
// else if (mes < 1 || mes > 12) alert("Data Inválida: Mês incorreto.");
// else if (dia < 1 || dia > 31) alert("Data Inválida: Dia incorreto.");
// else alert(`Data válida: ${dia}/${mes}/${ano_ex26}`);


// // =================================================================
// // 27. Troca de valores
// // =================================================================
// let x = parseFloat(prompt("(Ex 27) Digite o valor de X:"));
// let y = parseFloat(prompt("(Ex 27) Digite o valor de Y:"));

// let auxiliar = x;
// x = y;
// y = auxiliar;

// alert(`Depois da troca:\nX agora vale: ${x}\nY agora vale: ${y}`);
