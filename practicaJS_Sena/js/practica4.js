/*
    Programa: Calcular nora cualitativa
    Autor: Sergio Medina
    Fecha: 16/11/2024
*/
let nombre,cuantitativa,cualitativa=""
nombre=prompt("Nombre estudiante: ")
cuantitativa=parseFloat(prompt("Nota cuantitativa: "))
if(cuantitativa<=59){
    cualitativa="D"
}
else if(cuantitativa<=79){
    cualitativa="C"
}
else if(cuantitativa<=89){
    cualitativa="B"
}
else{
    cualitativa="A"
}
alert("Nombre: "+nombre)
alert("Nota Cuantitativa: "+cuantitativa)
alert("Nota Cualitativa: "+cualitativa)