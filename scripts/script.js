function generateRandom() {
  number = Math.floor(Math.random() * 100) + 1;
  document.getElementById("random").innerHTML = (`${number}`);
}



function calc() {
  input = document.getElementById("field").value;
  result = input.replaceAll("log", "Math.log")
      .replaceAll("pi", "Math.PI").replaceAll("e", "Math.E")
      .replaceAll("sin", "Math.sin").replaceAll("cos", "Math.cos")
      .replaceAll("min", "Math.min").replaceAll("max", "Math.max");
  document.getElementById("res").innerHTML
      += "&nbsp;&nbsp;&nbsp;&nbsp;" + input + "  --->  " + eval(result) + "<br>";
  document.getElementById("field").value = '';
  document.getElementById("field").focus();
}

function clearField(){
  document.getElementById("res").innerHTML = "";
}