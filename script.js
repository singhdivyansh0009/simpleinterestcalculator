function compute()
{
  var  p = document.getElementById("principal").value;
  var  r = document.getElementById("rate").value;
  var  t= document.getElementById("years").value;
  var si= (p*r*t)/100;
  pr=document.getElementById("p");
  ra=document.getElementById("r");
  ti=document.getElementById("t");
    
if (p<=0) {
    alert("Enter a positive number");
 }    
 else
 {
  result=document.getElementById("result");
  pr.innerHTML= "PRINCIPLE AMOUNT :"+"<span class='highlight'>" +" "+"RS."+""+p;
  ra.innerHTML="RATE OF INTREST :"+"<span class='highlight'>"+" "+r+"%";
  ti.innerHTML="TIME PERIOD :"+"<span class='highlight'>"+" "+t+" "+"YEARS";
  result.innerHTML="SIMPLE INTEREST :"+"<span class='highlight'>" +"  "+"RS."+" "+si;
 }
}