function k1() {
  /*USER INTERFACE LOGIC */
 var s1 = document.getElementById("side1").value;
 var s2 = document.getElementById("side2").value;
 var s3 = document.getElementById("side3").value;
  /*BUSINESS LOGIC */
 var a1 = parseInt(s1);
 var a2 = parseInt(s2);
 var a3 = parseInt(s3);

if ((a1+a2>a3) && (a1+a3>a2) && (a2+a3>a1)){
alert("Its a triangle.")
if (a1 === a2 && a1 === a3 && a2 === a3){
alert("This is an equilateral triangle");
}
 else if (a1 === a2 || a1 === a3 || a2 === a3) {
   alert("This is an isosceles triangle");
 }
 else if (a1 !== a2 || a1 !== a3 || a2 !== a3 ) {
   alert("This is a scalene triangle");
 }
}
else{
  alert("A triangle cannot be formed");
}
}
