//Magic 8 Ball
document.getElementById("button1").addEventListener("click", btnclicked);

function btnclicked() {
  // Variables
  let randNum = Math.random() * 100;
  let phrase = document.getElementById("sentence");
  let textLenght = phrase.value.length;
  let phrase2 = document.getElementById("sentence").value.toLowerCase();

  // Execute Function
  if (textLenght == 0) {
    document.getElementById("output").innerHTML = `Please Ask a Question`;
  } else if (textLenght > 0 && randNum <= 20) {
    document.getElementById("output").innerHTML = `Without a Doubt`;
    document.getElementById("output").style.color = `pink`;
  } else if (textLenght > 0 && randNum > 20 && randNum <= 40) {
    document.getElementById("output").innerHTML = "hi";
    document.getElementById("output").style.color = `violet`;
  } else if (textLenght > 0 && randNum > 40 && randNum <= 60) {
    document.getElementById("output").innerHTML = "Concentrate and Ask Again";
    document.getElementById("output").style.color = `purple`;
  }
  // Special Answers
  if (phrase2 == "is javascript awesome") {
    document.getElementById("output").innerHTML = "Of Course It is";
    document.getElementById("output").style.color = `blue`;
  }
  if (phrase2 == `is the sky blue`) {
    document.getElementById("output").innerHTML = `Of Course the sky is blue!`;
    document.getElementById("output").style.color = `green`;
  }
  if (phrase2 == `does the magic 8 ball work`) {
    document.getElementById("output").innerHTML = `How Dare You Doubt Me`;
    document.getElementById("output").style.color = `red`;
  }
}
