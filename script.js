/* let nome = prompt("Digite aqui o seu nome");

console.log(`O nome digitado foi ${nome}`);

alert(`Seja bem vindo, ${nome}! Aproveite sua visita.`);
 */

let program = [];

program[1] = ['1 - Digite'];
program[2] = ['2 - Contador'];
program[3] = ['3 - Empréstimo'];
program[4] = ['4 - Aleatório'];
program[5] = ['5 - Escadinha'];
program[6] = ['6 - Quadrilha Agostina'];

let option = prompt("Escolha uma opção \n" + program.join('\n'));

while (isNaN(Number(option)) || option === null || option >program[length]) {
    option = prompt("Digite uma opção");
}

if (option === '1') {
    let prog = true;

    while (prog === true) {

        let numero = (prompt("Digite o numero:"));

        while (isNaN(Number(numero)) || numero === null) {
            alert("Valor inválido");
            numero = (prompt("Digite o numero:"));
        }

        if (numero > 10) {
            alert("É um número maior que 10");
        }
        else if (numero < 10) {
            alert("É um número menor que 10");
        }
        else {
            alert("É o número 10");
        }

        prog = confirm("Deseja executar o programa?");

    }

}

else if (option === '2'){

}

else if (option === '3'){
    let idade = prompt("Digite a idade");
    let renda = prompt ("Digite a renda mensal");
    let emprestimo = prompt("Digite o valor do empréstimo. Só emprestamos acima de 1000 reais");
    let parcelas;
    let valorparcela;
    let valorFinalParcela;
    let valorTotal;


    if((idade>=21)&&(idade<=60)){
        if(renda>=1500){
            if((emprestimo>=1000)&&(emprestimo<=(renda*20))){
                alert(`Empréstimo de ${emprestimo} aprovado!`);
                parcelas = prompt ("Entre 1 e 36 vezes, quanto deseja pagar?");
                valorparcela = emprestimo / parcelas;
                valorFinalParcela = valorparcela * (juro/100);
                valorTotal = valorFinalParcela * parcelas;
                alert(`Com juros a 6%, cada parcela será de ${valorFinalParcela} \n e o valor total do seu empréstimo, com juros, será de ${valorTotal}` )
            }
        }
    }
    else{
        alert("Empréstimo recusado");
    }
}    
    


else if (option === '4'){

}
else if (option === '5'){

}
else if (option === '6'){

}