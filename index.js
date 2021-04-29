let display = document.getElementById('Displayscr');

// checking for targeted id element
// display.addEventListener('click',()=>{
//     return console.log('Hello');
// })

buttons = document.querySelectorAll('button');
let displayValue=' ';
let answer;
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button Text is ',buttonText);
        if(buttonText== 'X'){
            buttonText='*';
            displayValue+=buttonText;
            display.value=displayValue;
        }
        else if(buttonText=='CLR'){
            displayValue=' ';
            display.value=displayValue;
        }
        else if(buttonText=='ANS'){
            display.value=answer;
            displayValue=' ';
        }
        else if( buttonText== '='){
            display.value = eval(displayValue);
            answer=display.value;
            displayValue=' ';
        }
        else{
            displayValue+=buttonText;
            display.value=displayValue;
        }
    });
}