function sumar(){
    var horasTrabDia = parseInt(document.getElementById('i1').value);
    var diasTrab = parseInt(document.getElementById('i2').value);
    var quieresGanar = parseInt(document.getElementById('i3').value);
    var diasLibresMes = parseInt(document.getElementById('i4').value);
    var diasLibres = parseInt(document.getElementById('i5').value);
    var porcentajeJuntas = parseInt(document.getElementById('i6').value);
    var gastosMen = parseInt(document.getElementById('i7').value);
    var jubilacion = parseInt(document.getElementById('i8').value);
    var salarioBruto = quieresGanar * 12 
    var horasPosibles =  horasTrabDia * diasTrab * 52;
    var horaBasica = salarioBruto / horasPosibles;
    var horasNoTrabajadas = diasLibresMes * horasTrabDia + diasLibres * horasTrabDia;
    var TiempoAdmini = porcentajeJuntas/100 * (horasPosibles - horasNoTrabajadas);
    var gastosFijos = gastosMen * 12;
    var precioExtra = (horasNoTrabajadas + TiempoAdmini) * horaBasica + gastosFijos;
    var horasEfectivas = (horasPosibles - horasNoTrabajadas - TiempoAdmini) * horaBasica;
    var renta = precioExtra / horasEfectivas;
    var precioPorHora = horaBasica + (horaBasica * renta) + (horaBasica *jubilacion/100);
    document.getElementById('resultado').innerHTML = precioPorHora.toFixed(2);
}   