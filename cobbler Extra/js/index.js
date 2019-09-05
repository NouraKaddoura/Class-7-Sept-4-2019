//Set a variable
var name = "your name";

//Update the DOM
$('#welcome').html('Welcome ' + name);

//Output to the console
console.log(name);

// Change the text of the button
$('#buy').text('Order Now');

//Write a function!
function sayHiToMom() {
    $('#welcome').html('Hi mom!');
}

//Add an event listener
$('#buy').on('click', sayHiToMom);
