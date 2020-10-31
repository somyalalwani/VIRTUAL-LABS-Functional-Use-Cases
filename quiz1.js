document.getElementById("quiz1").onsubmit = function (){
	   a1 = parseInt(document.querySelector('input[name = "q1"]:checked').value);
	   a2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);
	   a3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);
	   a4 = parseInt(document.querySelector('input[name = "q4"]:checked').value);
	   a5 = parseInt(document.querySelector('input[name = "q5"]:checked').value);
	   
	   
	   result = a1 + a2 + a3 + a4 + a5;
	   
	document.getElementById("score").innerHTML = "You scored : " +  result + "/100";
	   


return false; // required to not refresh the page; just leave this here
}