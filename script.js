var count = 0;


document.addEventListener("keydown", e => {

     var h = e.keyCode;
     if(h==13){
        var start = document.getElementById("inputS").value;
        var end = document.getElementById("inputE").value;
        var timeStart = document.getElementById('time1').value;
       
        var timeEnd = document.getElementById('time2').value;
   // Conversion of Variables to date objects because js dont treat them as date, but as a string "   "
   
     var dateObjectOfStart = new Date(start);

     var dateObjectOfEnd = new Date(end);
     //timeStart
     const currentDate = new Date();
     const [hours,minutes] = timeStart.split(':');
     currentDate.setHours(hours);
     currentDate.setMinutes(minutes);
     currentDate.setSeconds(0);
    
 var timeObject1 = currentDate.toTimeString();
     //timeEnd
     const currentDate1 = new Date();
     const [hour, minute] = timeEnd.split(':');
     currentDate1.setHours(hour);
     currentDate1.setMinutes(minute);
     currentDate1.setSeconds(0);
    
 var timeObject2 = currentDate1.toTimeString().slice(0, 8);

        console.log(dateObjectOfStart,dateObjectOfEnd);
      
        
        if(start === "" || end === ""){
         document.getElementById('errors').innerText = "Enter Values first";
        }
        else if(start===end){
         document.getElementById('errors').innerText = "Same date! Please Enter a diffrent date";
      }
        else if(start > end){
         document.getElementById('errors').innerText = "Start date must be lesser than end date! Please Enter a diffrent date";
        }
      else{
         document.getElementById('errors').innerText = "";
      
      
    function updateTime(){
     
      // currentDate.setMinutes(currentDate.getMinutes() + 1);
      currentDate.setSeconds(currentDate.getSeconds() + 1);
      timeObject1 = currentDate.toTimeString().slice(0, 8);

      if(timeObject1 === "23:59:59"){
         count++;
         if(count>0){
            dateObjectOfStart.setDate( dateObjectOfStart.getDate()+1 );

         }
      }
 

      var daysLeft = Math.abs(dateObjectOfStart.getTime() - dateObjectOfEnd.getTime());
      var daysLeft = Math.ceil(daysLeft / (1000 * 60 * 60 * 24));
      if(daysLeft<0){
         daysLeft = 0;
      }

      var timeLeftHours = Math.abs(currentDate.getHours() - currentDate1.getHours());

      var timeLeftMins =  Math.abs( currentDate.getMinutes() - currentDate1.getMinutes());
              
      var timeLeftSeconds = 60 - (currentDate.getSeconds() - currentDate1.getSeconds() );
      
      








      
      document.getElementById('clock').innerText = daysLeft + ' Days ' + timeLeftHours + ':' + timeLeftMins + ':' + timeLeftSeconds + "To Go" ;
      console.log(count);
     
      if (dateObjectOfStart.getTime() === dateObjectOfEnd.getTime() && timeObject1 === timeObject2){
         clearInterval(intervalId);
         console.log("worked");

      }
    
      
      
    }
    const intervalId = setInterval(updateTime,1000);

     
     
     


    
   }

     }

});

document.addEventListener("click",e =>{
   document.getElementById('errors').innerText = "";
})
