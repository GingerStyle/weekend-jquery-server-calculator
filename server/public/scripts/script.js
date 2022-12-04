$(onReady);

//variable to hold the equation as the user types it
let inputString = '';

function onReady(){
    console.log('jquery working');

    $('#inputs').on('click', 'button', getInputString)
}

//function to get the value of the button typed and decide what to do with it
function getInputString(){
    let character = this.id;
    console.log('character typed:', character);
    if(character == 'clear-btn'){
        $('#calculation-field').val('');
        console.log('cleared');
        inputString = '';
        console.log('inputString:', inputString);
    }else if(character == '+' || character == '-' || character == '*' || character == '/'){
        inputString += ` ${character} `;
        console.log('character is:', character);
        appendToInputField(character);
        console.log('inputString:',inputString);
    }else if(character == '='){
        inputString = $('#calculation-field').val();
        $.ajax({
            method: 'POST',
            url: '/calculation',
            data: inputString,
        }).then(function(response){
            console.log('response from server', response);
            //getQuotes();
        });
    }else{
        inputString += character;
        console.log('inputString:',inputString);
        appendToInputField();
    }
}

//function to update the input Field so user can see their equation as they are typing it
function appendToInputField(){
    $('#calculation-field').val(inputString);
}

function appendToDOM(){

}