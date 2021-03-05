var arr;
var par1 = "";
var par2 = "";
var pareja = "";
var sumaParejas = 0;
var vol1 = "";
var vol2 = "";
var turnos = 0;

//mezcla
function mezclar(bar){
   var m= bar.length-1;
   for (var i=m; i>1;i--){ 
      alea=Math.floor(i*Math.random()); 
      temp=bar[i]; 
       bar[i]=bar[alea]; 
       bar[alea]=temp; 
    }
   return(bar);
}

arr=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
mezclar (arr);
//

//mostrar, comparar, etc
function showImg( id )
{


    if (vol2 === "") 
    {
        if (vol1 === "")
        {
            vol1 = id;
                 
        }else
            {
                vol2 = id; 
            } 
    }

    if (par2 === "")
    {
        document.getElementById(id).src= "img/" + arr[id] + ".png";

        if (par1 === "")
        {
            par1 = arr[id];
                 
        }else
            {
                par2 = arr[id];
                turnos++;
            } 

        if (par2 != "") 
        {
            
            pareja = par1.toString(10) + par2.toString(10);

            


            arrParejas=["10","01", "23", "32", "45", "54", "67", "76", "89", "98", "1011", "1110", "1213", "1312", "1415", "1514"];
            if( arrParejas.includes(pareja) )
            {
                sumaParejas++;
                par1 = "";
                par2 = "";
                pareja = "";
                vol1 = "";
                vol2 = "";
            }
            else
            {
                setTimeout("volver()", 1000);    
            }

            document.getElementById('res_par').innerHTML = sumaParejas;
            document.getElementById('res_tur').innerHTML = turnos;
        }

        console.log("turnos: " + turnos);

    
    }

    if (sumaParejas == 8)
    {
      alert("¡Ganaste!")
      setTimeout("reinicio()", 2000)
    }
}
//

//incorrecto
function volver()
{

     document.getElementById(vol1).src= "img/dorso.png";
     document.getElementById(vol2).src= "img/dorso.png";
    
     par1 = "";
     par2 = "";
     pareja = "";
     vol1 = "";
     vol2 = "";
}
//

//reiniciar
function reinicio()
{
  location.reload();
}
//

function datos()
{
  document.getElementById(res_par).innerHTML="hola";
  document.getElementById(res_turn).innerHTML = "hee hee";
}

