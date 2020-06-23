//---------chap 21------
//string methods


//task 1
// var firstname=prompt("enter your first name");
// var lastname=prompt("enter your last name");
// var  fullName= firstname+lastname;
// alert("welcome "+fullName+" !");

//tast 2
// var a=prompt("enter your favourite mobile phone model.");
// var l=a.length;
// document.write("My favourite phone is: "+a);
// document.write("<br>Length of string: "+l);

//task 3
//  var arr="pakistani";
// document.write("String: "+arr);
// var i=arr.indexOf('n');
// document.write("<br>Index of 'n': "+i);


//task 4
// var arr="Hello World";
// document.write("String: "+arr);
// var ask="l";
// for (var i=arr.length-1; i>=0; i--){
//  if(arr[i]==ask){
//         document.write("<br>Last Index of '"+ask+"': "+i);
//         break;
//     }
// }

// task 5
// var arr="Pakistani";
// document.write("String: "+arr);
// var a=arr.charAt(3);
// document.write("<br>Character at index 3: "+a);

//task 6
// var firstname=prompt("enter your first name");
// var lastname=prompt("enter your last name");
// var  fullName= firstname.concat(lastname);
// alert("welcome "+fullName+" !");

//task 7
// var city="Hyderabad";
// document.write("City: "+city);
// var res = city.replace("Hydera", "Islama");
// document.write("<br>After replacement: "+res);

//task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message);
// var res = message.replace(/and/g, "&");
// document.write("<br>After replacement: "+res);

//task 9
// var str="472";
// var num=Number(str);
// document.write("Value: "+str);
// document.write("<br>Type: "+typeof str);
// document.write("<br>Value: "+num);
// document.write("<br>Type: "+typeof num);

//task 10
// var a=prompt("enter data");
// var b = a.toUpperCase();
// document.write("User input: "+a);
// document.write("<br>Upper case: "+b);

//task 11                          
// var a=prompt("enter data");
// var b = a.slice(1).toLowerCase();
// c=a.charAt(0).toUpperCase();
// var d =c+b;
// document.write("User input: "+a);
// document.write("<br>Title case: "+d);



//task 12                                  
// var num = 35.36 ;
// document.write("Number: "+num+"<br>Result: ");
// var str=num.toString();
// for(var i=0; i<str.length; i++){
//     if(str[i]=='.'){
//         i++;
//     }
//         document.write(str[i]);
// }



//task 13                                 
// var c=prompt("enter username");
// for(var i=0; i<c.length; i++)
// {var a= c.charCodeAt(i);
//     if(a=='33' || a=='44' || a=='46' || a=='64')
//     {
//         alert("please enter a valid user name!");
//     }
// }

//task 14
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var c=b.toLowerCase();
// var flag=0;
// for(var i=0; i<a.length; i++){
//     if(c==a[i]){
//         flag=1;
//         alert(b+" is available at index "+i+" in our bakery.");
//     }
// }
// if(flag==0){
// alert("We are sorry. "+b+" is not available in our bakery.");}


//task 15                                           ********
// var pass = prompt("enter your password!");
// document.write("Entered Password: " + pass);
// if (pass.length >= '6') {
//     if (pass[0] >= '0' && pass[0] <= '9') {
//         alert("Password can not be begin with a number! \nPlease enter a valid password!");
//     }
//     else {
//         for (var i = 0; i < pass.length; i++) {
//             if ((pass[i] >= 'A' && pass[i] <= 'Z') || (pass[i] >= 'a' && pass[i] <= 'z')) {
//                 document.write("yes");
//             }
//              else if(pass[i] >= '0' && pass[i] <= '9') {
//                 document.write("y");
//             }
//             else {
//                 alert("Enter valid password!");
//                 break;
//             }
//         }
//     }
// }
// else {
//     alert("Password must have atleast 6 characters! \nEnter valid password.");
// }


//task 16
// var university = "University of Karachi";
// var s=university.split("");
// for(var i=0; i<university.length; i++)
// {
//     document.write(s[i]+"<br>");
//  }


//task 17
// var a=prompt("enter something!");
// document.write("User input: "+a+"<br>");
// var len=a.length;
// document.write("Last character of input: "+a[len-1]);

// task 18                                      
// var a="The quick brown fox jumps over the lazy dog";
// document.write("Text: "+a);
// var b= a.toLowerCase();
// var count = (b.match(/the/g)).length;
// document.write("<br>There are "+count+" occurrence(s) of word 'the'.");




//chapter # 26-30
//math methods



//task 1
// var num=+prompt("enter a positive integer");
// document.write("number: "+num);
// var a =num.toFixed();
// document.write("<br>round off value: "+a);
// var b= Math.floor(num);
// document.write("<br>floor value: "+b);
// var c=Math.ceil(num);
// document.write("<br>ceil value: "+c);

//task 2
// var num=+prompt("enter a negative floating point");
// document.write("number: "+num);
// var a =num.toFixed();
// document.write("<br>round off value: "+a);
// var b= Math.floor(num);
// document.write("<br>floor value: "+b);
// var c=Math.ceil(num);
// document.write("<br>ceil value: "+c);

//task 3
// var num=+prompt("enter a number");
// var a=Math.abs(num);
// document.write("The absolute value of "+num+" is "+a);

//task 4
// var a=Math.random()*6;
// var b=Math.ceil(a);
// document.write("random dice value: "+b);

//task 5
// var a=Math.random()*2;
// var b=Math.ceil(a);
// if(b==2){
// document.write(+b+"<br>random coin value: Heads");}
// else{
//     document.write(+b+"<br>random coin value: Tails"); 
// }

//task 6
// var a=Math.random()*100;
// var b=Math.ceil(a);
// document.write("random number between 1 and 100: "+b);


//task 7
// var a=prompt("Enter your weight in kilograms");
// document.write("The weight of user is "+a);

//task 8
// var a=Math.random()*10;
// var b=Math.ceil(a);
// var c=+prompt("enter number between 1 to 10");
// if(c==b)
// {
//     alert("Congratulation!");
// }
// else{
//     alert("try again!");
// }






//-------------chapter #31-34
//date methods





//task 1
// var date=new Date();
// document.write(date);

//task 2
// var date=new Date();
// var a=date.getMonth;
// document.write(a);