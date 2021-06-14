 function calculatedayoftheweekborn(){
   event.preventDefault();
   //Get birthday from the form
   
   var Birthday=document.getElementById("myBirthday").value;
  //calculate day ot the week born

  // dayoftheweekborn=(((CC/4-2*CC-1))+((5*YY/4))+26*(MM+1)/10))+DD)%7)
 var dayoftheweekborn=Birthday(year+"/"+month+"/"+day);
  
  document.getElementById("myResults").innerHTML= Birthday
 }