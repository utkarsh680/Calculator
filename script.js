var buttons = document.getElementsByClassName('button');
var display = document.getElementById('screen-input');
var result = document.getElementById('screen-result');


function button(num){
    console.log(num);
    display.value+= num;
    
}
function Clear(){
    display.value = "";
    result.innerHTML = "";
    console.log(result.value)
}
function Calculate(){
    try{
      result.innerHTML = eval(display.value);
     
      }
      catch(err){
          display.value = "Error";
      }
}
function Del(){
    
    display.value = display.value.substr(0,display.value.length-1);
    
}