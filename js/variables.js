var canvas = document.getElementById("canvas");
var papel = canvas.getContext("2d");
var rIonico = document.getElementById("rIonico");
var rCovalente = document.getElementById("rCovalente");
var rMetalico = document.getElementById("rMetalico");
var rs = document.getElementById("rs");
var vl = document.getElementById("vl");

rIonico.addEventListener("click",r1)
rCovalente.addEventListener("click",r2)
rMetalico.addEventListener("click",r3)

vl.addEventListener("click",rc)

var fondo = new Image();
fondo.src = "imagenes/enlaces/enlace Ionico.png";
fondo.addEventListener("load",cargar);

var p2 = new Image();
p2.src = "imagenes/enlaces/enlace Covalente.png";


var p1 = new Image();
p1.src = "imagenes/enlaces/enlace Metalico.png";





var defCo = "Un enlace covalente es un no metal que le comparte electornes a otro no metal"
var defMe = "Un enlace metalico es donde un metal y otro metal comparten electrones"
var defIo = "Un enlace Ionico es donde un no metal se une con un metal"
