var num=prompt("Hii Nishanth!! , enter num value:");
var n=num/100;
var m=num%100;
var a1=Math.floor(n);
// document.write(a1);
// document.write(" ");
// document.write(m);
 var o=m/10;
 var a3=m%10;
 var a2=Math.floor(o);
// document.write(a2);
// document.write(" ");
// document.write(a3);
var i=0;

for(i=0;i<5;i++){

 var num2=prompt("Please enter a 3 digit number");
//    document.write(" ");
 	document.write(num2+"<br />");
 var a=num2/100;
 var b=num2%100;
 var b1=Math.floor(a);
// document.write(b1);
// document.write(" ");
 var c=b/10;
 var b3=b%10;
 var b2=Math.floor(c);
// document.write(b2);
// document.write(" ");
// document.write(b3);
 var bull=0;
 if(a1==b1)
 {
  	bull=bull+1;
 }
  if(a2==b2){
 	bull=bull+1;
 }
  if(a3==b3){
	bull=bull+1;
 }
// document.write(" ");
 document.write(bull);
 document.write(" bulls  ");
 var cows=0;
 if(a1==b2||a1==b3)
 	cows=cows+1;
 if(a2==b1||a2==b3)
 	cows=cows+1;
 if(a3==b1||a3==b2)
 	cows=cows+1;
 document.write(cows);
 document.write(" cows <br />");
 if(bull==3)
 	document.write(" Bingo!!! You won the game ;) <br />");
}

  
