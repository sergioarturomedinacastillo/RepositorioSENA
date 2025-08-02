/*
    Programa: Calcular honorarios de docente cátedra
    Autor: Sergio Medina
    Fecha: 23/11/2024
*/
let nombre,categoria,horas,honorarios=0
nombre=prompt("Nombre: ")
categoria=parseInt(prompt("Categoria(1,2,3,4,5): "))
horas=parseFloat(prompt("Horas laboradas: "))
switch(categoria){
    case 1:honorarios=horas*40000;break
    case 2:honorarios=horas*50000;break
    case 3:honorarios=horas*65000;break
    case 4:honorarios=horas*80000;break
    case 5:honorarios=horas*90000;break
}
alert("Nombre: "+nombre)
alert("Honorarios: "+honorarios)




