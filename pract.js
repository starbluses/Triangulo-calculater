var historial = [];
historial.push(resultado);
var historytable = document.getElementById("history-body");
var newrow = historytable.insertrow();
var newcell = newrow.insertcell();
var newtext =document.createTextNode(resultado);
newcell.appendchild(newtext);
{
    function borrarprimerafila()}
var historytable = document.getElementById("history-body");historytable.deleterow(0);
function calculararea(){
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);
var semiperimeter =(side1+side2+side3)/2;
var area = Math.sqrt(
    semiperimeter *
    (semiperimeter-side1) * (semiperimeter-side2)* (semiperimeter-side3));
    document.getElementById("result").textContent=
    "el area del triángulo es :" + area.toFixed(2);
    agruparoperacion("Área:" + area.toFixed(2));
}
function calcularperimetro(){
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);
    var perimetro = side1+side2+side3;
    document.getElementById("result").textContent= "El perimetro del triángulo es :"+ perimeter.toFixed(2);agruparoperacion    
}
function calculartipotriangulo()
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);
    if (side1 === side2 && side2 === side3){
        document.getElementById("result").textContent= "Es un triángulo equilatero";agregaroperacion ("Tipo: Equilatero");
    } else if (side1===side2 || side1===side3 || side2===side3) {
        document.getElementById("result").textContent= "Es un triángulo isoceles";agregaroperacion ("Tipo: isoceles");
}

