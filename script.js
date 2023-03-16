var buttons = document.getElementsByClassName('button');
var display = document.getElementById('screen-input');
var oprand1 = 0;
var oprand2 = null;
var operator = null;
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('value');
        console.log(value);
        if(value == '+'){
        }
        else if(value == '-'){
        }
        else if(value == 'X'){

        }
        
    });
}