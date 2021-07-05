function test(){
   document.getElementById("testscript").innerHTML=Date();
   document.getElementById("submit").style.backgroundColor="red";
   document.getElementById("submit").style.backgroundColor="red";
   document.myform.style.backgroundColor="green";

}
function calculator(a){
   var y=parseInt (document.myform.num1.value);
   var z=parseInt(document.myform.num2.value);
   var output=document.myform.result;
   if(a.value=="Add"){
      output.value=y+z;
   }
   else if(a.value=="Subtract"){
      output.value=y-z;
   }
   else if(a.value=="Multiply"){
      output.value=y*z;
   }
   else if(a.value=="Devide"){ 
      output.value=y/z;
   }
   else 
   output.value=y%z;
}
