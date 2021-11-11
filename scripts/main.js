let helloButton = document.getElementById("helloButton");
let byeButton= document.getElementById("byeButton");
let askButton= document.getElementById("askButton");
let gayButton= document.getElementById("gayButton");

helloButton.onclick = function() {
    let name = prompt('Tell me your name!');
    document.getElementById("script").innerHTML +=
        "<br>" + (`${name}, you are welcome!`);
}

byeButton.onclick = function() {
    let name = prompt('You dare!');
    document.getElementById("script").innerHTML +=
        "<br>" + (`${name}, get out of here!`);
}

askButton.onclick = function() {
    document.getElementById("script").innerHTML +=
        "<br>" + "This was created by Vladimir Perepelkin";
}

gayButton.onclick = function() {
    document.getElementById("script").innerHTML +=
        "<br>" + "Yes. I hope, you like it.";
}