var buttons = document.getElementsByClassName('button');
var display = document.getElementById('screen-input');

function button(num){
    console.log(num);
    display.value+= num;
}
function Clear(){
    console.log("hhh")
    display.value = "";
}
function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "Error";
    }
}
function Del(){
    display.value = value.substr(0,value.length-1);
}