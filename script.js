/* Comecei do 5° dia, devido os projetos iniciais serem bem simples */
/*
var dataCompleta = undefined;

var horaAtual= undefined;
dataCompleta = new Date()
horaAtual = dataCompleta.getHours();
if(horaAtual < 12) {
    alert("Bom dia"); } else if(horaAtual< 18) {
        alert("Boa tarde")
    } else {
        alert("Boa noite")
    }*/
/* Fim do 5° Dia */

/* Pulei o dia 6°, pois ele é muito simples */

/* Dia 07 

var data = new Date(); 
var diaDaSemana = data.getDay();
var diaDaSemana = data.getDay();
var diaDaSemanaExtenso; 
switch(diaDaSemana) {
    case 1:
      diaDaSemanaExtenso ="domingo"
        break;
    case 2:
        diaDaSemanaExtenso = "segunda-feira";
        break;
    case 3:
        diaDaSemanaExtenso = "terça-feira";
        break;
    case 4:
        diaDaSemanaExtenso = "quarta-feira";
        break;
    case 5:
        diaDaSemanaExtenso = "quinta-feira";
    case 6:
        diaDaSemanaExtenso ="sexta-feira";
    case 7:
        diaDaSemanaExtenso = "sábado";
}
console.log("Hoje é " + diaDaSemanaExtenso + ".") */

/* DIA 18 

var continuar ="S";
var animalExibir;
var animais = new Array(4);
    animais[0] = "Cuidado, a picada de uma radioativa pode te transformar em um super herói";
    animais[1] = "Escorpião é o oitavo signo astrológico do zodíaco";
    animais[2] = "Cobra é uma denominação genérica para este animal";
    animais[3] = "Na linguagem vulgar chama-se lagarta";
    while(continuar == "S") {
        console.clear();
        animalExibir= prompt("Escolha uma opção abaixo:\n[0] Aranha \n[1] Escorpião \n[2] Cobra \n[3] Lagarta", "Digite aqui");

        switch(animalExibir) {
            case "0":
                console.log("Aranha");
                console.log(animais[animalExibir]);
                break;

            case"1":
                console.log("Escorpião");
                console.log(animais[animalExibir]);
                break;

            case "2":
                console.log("Cobra");
                console.log(animais[animalExibir]);
                break;

            case "3":
                console.log("Lagarto");
                console.log(animais[animalExibir]);
                break;

            default:
                console.log("Sonso");
                break;
        }

        continuar=prompt("Deseja ver outro animal? [S]im / [N]ao", "Digite aqui");
    }

    console.clear();
    console.log("Obrigado"); */

    /*Aula 19 
    var nomeCurso =  prompt("Informe o nome do curso", "Digite aqui");
    var codigoCurso = prompt("Informe o código do curso", "Digite aqui");
    var novoConteudo = "S";
    var conteudoTemp ="";
    var conteudoCurso = [];
    var contador = 0;

    while(novoConteudo == "S") {
        conteudoTemp = prompt("Informe o conteúdo do cuso", "Digite aqui");
        conteudoCurso.push(conteudoTemp);
        novoConteudo = prompt("Deseja cadastrar um novo contepudo para o curso? [S]im/ [N]ao", "Digite aqui");
    }

    console.clear();
    console.log("Codigo:" + codigoCurso);
    console.log("Curso:" + nomeCurso);
    console.log("Curso:" + nomeCurso);
    console.log ("Conteudo:");
    while(contador < conteudoCurso.length) {
        console.log(conteudoCurso[contador]);
        contador++;
    } */


    /* Missão 20 */

    var alunos = ["Maria", "Rose", "Claudio",  "Renata" ];
    for(contador = 0; contador< 4; contador++){
        console.log(alunos[contador]);
    }