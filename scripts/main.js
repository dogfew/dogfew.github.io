let myButton = document.querySelector('button');

myButton.onclick = function() {
    let name = prompt('Tell me your name!');
    document.getElementById("script").innerHTML = (`${name}, welcome to the page!`);
}
