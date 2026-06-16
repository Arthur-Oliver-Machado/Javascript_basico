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

let entrada = prompt("Digite uma letra:");

// Se o usuário digitou algo e não cancelou
if (entrada) {
    // Transforma em maiúscula e remove espaços extras
    let letra = entrada.toUpperCase().trim();

    if (letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
        alert("É uma VOGAL");
    } else {
        alert("É uma CONSOANTE");
    }
} else {
    alert("Você cancelou ou não digitou nada!");
}
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