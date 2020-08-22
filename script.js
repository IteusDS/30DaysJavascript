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

/* Dia 07 */

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
console.log("Hoje é " + diaDaSemanaExtenso + ".")