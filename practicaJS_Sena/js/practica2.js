/*
    Programa: Calcular nota definitiva tripulante
    Autor: Sergio Medina
    Fecha: 16/11/2024
*/
let nombre,nr1,nr2,nr3,nr4,nr5,ni,definitiva=0
nombre=prompt("Nombre: ")
nr1=parseFloat(prompt("Nota Reto 1: "))
nr2=parseFloat(prompt("Nota Reto 2: "))
nr3=parseFloat(prompt("Nota Reto 3: "))
nr4=parseFloat(prompt("Nota Reto 4: "))
nr5=parseFloat(prompt("Nota Reto 5: "))
ni=parseFloat(prompt("Nota Inlgés: "))
definitiva=nr1*0.1+nr2*0.1+nr3*0.2+nr4*0.2+nr5*0.2+ni*0.2
alert("Nombre: "+nombre)
alert("Nota definitiva: "+definitiva)

