/*
    Programa: Calcular Servicio de agua - N usuarios
    Autor: Sergio Medina
    Fecha: 07/12/2024

*/
let n,codigo,nombre,estado,estrato,consumo,tarifaBasica=0,valorConsumo=0,valorPagar=0,totalFacturacion=0,cantidadSupendidos=0
n=parseInt(prompt("Caantidad de usuarios: "))
for(let x=1;x<=n;x++){
    codigo=parseInt(prompt("Código: "))
    nombre=prompt("Nombre: ")
    estado=prompt("Estado (V/S): ")
    estrato=parseInt(prompt("Estrato(1-6): "))
    consumo=parseFloat(prompt("Consumo: "))
    if(estado==="V"){
        switch(estrato){
            case 1:tarifaBasica=10000;break
            case 2:tarifaBasica=20000;break
            case 3:tarifaBasica=30000;break
            case 4:tarifaBasica=45000;break
            case 5:tarifaBasica=60000;break
            case 6:tarifaBasica=70000;break
        }
        valorConsumo=consumo*200
        valorPagar=tarifaBasica+valorConsumo
        totalFacturacion+=valorPagar
        alert("Nombre: "+nombre)
        alert("Tarifa Básica: "+tarifaBasica)
        alert("Valor Consumo: "+valorConsumo)
        alert("Valor a Pagar: "+valorPagar)
    }
    else[
       cantidadSupendidos++ 

    ]
}
alert("Total Facturación: "+totalFacturacion)
alert("Caantidad de Suspendidos: "+cantidadSupendidos)
