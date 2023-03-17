var buttons = document.getElementsByClassName('button');
var display = document.getElementById('screen-input');
var result = document.getElementById('screen-result');
var screen = document.getElementById('screen');
var mode = document.getElementById('mode');
var body = document.getElementsByTagName('body')[0];
var buttonColor = document.getElementById('button-row');
var myname = document.getElementById('owner');

mode.addEventListener('click', function(){
    body.classList.toggle('dark');  
    display.classList.toggle('dark');
    result.classList.toggle('dark');
    screen.classList.toggle('dark');
    mode.classList.toggle('dark');
    buttonColor.classList.toggle('dark');
    myname.classList.toggle('dark');
    if(mode.classList.contains('dark')){
        theme.src = "https://cdn-icons-png.flaticon.com/512/581/581601.png"
    }else{
        theme.src = "https://cdn-icons-png.flaticon.com/512/439/439842.png" 
    }
    
    

})




// if(body.classList.contains('dark')){
//     body.style.backgroundColor = 'black';
//     body.style.color = 'white';
// }else{
//     body.style.backgroundColor = 'white';
//     body.style.color = 'black';
// }



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

