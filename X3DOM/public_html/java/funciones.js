function pick()
{
    var ts = document.getElementById("TIMER");
    var val_1 = ts.getAttribute("enabled");
   // var tm= (new Date().getTime())/1000;
    if (val_1 === "true") {
        document.getElementById('material').setAttribute('diffuseColor','1 0.5 0.5');
        document.getElementById('material2').setAttribute('diffuseColor','1 1 0');     
        ts.setAttribute("enabled", "false");
    }
    else {
        document.getElementById('material').setAttribute('diffuseColor','1 0.5 0.8');
        document.getElementById('material2').setAttribute('diffuseColor','1 0.5 0');      
        ts.setAttribute("enabled", "true");
    }
}
// ------------------------------------------------------

var showStatistics = true;
var showDebugLog   = true;
function toggleOverlayStatistics()
{
        var x3d_element = document.getElementById('x3dcontext');
        showStatistics = !showStatistics;
        x3d_element.runtime.statistics(showStatistics);
}
function toggleShowDebugLog()
{
       var  x3d_element = document.getElementById('x3dcontext');
        showDebugLog  = !showDebugLog;
        x3d_element.runtime.debug(showDebugLog);
}
//-----------------------------------------------
//resumen
function ver() { 
            
    var con= document.getElementById("contenedor");

        con.style.display="block";
 }
function ocultar() {

    var con= document.getElementById("contenedor");

        con.style.display="none";

 }
 
