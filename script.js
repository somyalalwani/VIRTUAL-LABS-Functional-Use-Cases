function submit0() {
  var x, text;

  x = document.getElementById("a0").value;
  if (x == "usecase diagram") {
    text = "correct answer";
  } else {
    text = "wrong answer. correct ans - usecase diagram";
  }
  document.getElementById("out0").innerHTML = text;
}

function submit1() {
  var x, text;

  x = document.getElementById("a1").value;
  if (x == "dynamic") {
    text = "correct answer";
  } else {
    text = "wrong answer. correct ans - usecase diagram";
  }
  document.getElementById("out1").innerHTML = text;
}

function submit2() {
  var x, text;
  x = document.getElementById("a2").value;
  if (x == "actor") {
    text = "correct answer";
  } else {
    text = "wrong answer. correct ans - usecase diagram";
  }
  document.getElementById("out2").innerHTML = text;
}

function submit3() {
  var x, text;
  x = document.getElementById("a3").value;
  if (x == "oval") {
    text = "correct answer";
  } else {
    text = "wrong answer. correct ans - usecase diagram";
  }
  document.getElementById("out3").innerHTML = text;
}

function submit4() {
  var x, text;
  x = document.getElementById("a4").value;
  if (x == "aggregation") {
    text = "correct answer";
  } else {
    text = "wrong answer. correct ans - usecase diagram";
  }
  document.getElementById("out4").innerHTML = text;
}