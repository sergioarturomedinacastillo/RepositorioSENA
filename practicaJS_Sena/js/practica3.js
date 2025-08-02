/*
    Programa: Calcular subsidio de transporte para un empleado
    Autor: Sergio Medina
    Fecha: 16/11/2024
*/
let nombre,salario,subsidio=0
nombre=prompt("Nombre empleado: ")
salario=parseFloat(prompt("Salario: "))
if(salario<=1500000){
    subsidio=150000
}
else{
    subsidio=0
}
alert("Nombre empleado: "+nombre)
alert("Salario: "+salario)
alert("Subsidio de transporte: "+subsidio)
