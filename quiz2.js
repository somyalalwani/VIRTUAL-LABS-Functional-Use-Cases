function myFunction() {
  var a,b,c,d,e,text;

  a = document.getElementById("1").value;
  b = document.getElementById("2").value;
  c = document.getElementById("3").value;
  d = document.getElementById("4").value;
  e = document.getElementById("5").value;


  if (a==4 && b==5 && c==1 && d==3 && e==2) {
    text = "Answer is correct!";
  } else {
    text = "Wrong answer! Please try again";
  }
  document.getElementById("demo").innerHTML = text;
}
