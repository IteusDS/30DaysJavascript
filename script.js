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
