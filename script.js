/* Comecei do 5° dia, devido os projetos iniciais serem bem simples */

var dataCompleta = undefined;

var horaAtual= undefined;
dataCompleta = new Date()
horaAtual = dataCompleta.getHours();
if(horaAtual < 12) {
    alert("Bom dia"); } else if(horaAtual< 18) {
        alert("Boa tarde")
    } else {
        alert("Boa noite")
    }
/* Fim do 5° Dia */