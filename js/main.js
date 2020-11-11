"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});

var FMT_ENTERO = "0,0",
    FMT_NUMERO = "0,0.00",
    FMT_MONEDA = "$0,0.00",
    FMT_PORCENTAJE = "0.00%",
    forma = document.getElementById("forma"),
    salidaS = document.getElementById("salidaS"),
    salidaR = document.getElementById("salidaR"),
    salidaM = document.getElementById("salidaM"),
    salidaD = document.getElementById("salidaD");

Node.prototype.error = function (mensaje) {
  this.className = "error";
  this.textContent = mensaje;
};
Node.prototype.info = function (mensaje) {
  this.className = "";
  this.textContent = mensaje;
};
function procesa(){
    
    var numero1 = parseInt(forma["n1"].value), 
    numero2 = parseInt(forma["n2"].value); 
    var error=false;
   
    if (isNaN(numero1)){
        error=true;
        salidaEntero.error("Entero Incorrecto");
    }
     if (isNaN(numero2) || numero2===0){
        error=true;
        salidaEntero.error("Rango Incorrecto");
    }
    
    if(!error){
        var m = new BigNumber(numero1).times(new BigNumber(numero2));
        var d = new BigNumber(numero1).div(new BigNumber(numero2));
        var s = new BigNumber(numero1).plus(new BigNumber(numero2));
        var r = new BigNumber(numero1).minus(new BigNumber(numero2));

        salidaS.info(numeral(s).format(FMT_MONEDA));
        salidaR.info(numeral(r).format(FMT_MONEDA));
        salidaM.info(numeral(m).format(FMT_MONEDA));
        salidaD.info(numeral(d).format(FMT_MONEDA));  
    }
}
function limpia(){
    
        salidaS.info("");
        salidaR.info("");
        salidaM.info("");
        salidaD.info(""); 
    forma["n1"].value="";
    forma["n2"].value="";
}
