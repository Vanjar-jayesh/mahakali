// const mybutton = document.getElementById("button");

// mybutton.onclick = function () {
//   mybutton = document.getElementById("demo").innerHTML = "HEloo";
// };

// document.getElementById("demo").onclick=function(){myfuncation()};

// function myfuncation(){
//     document.getElementById('button').innerHTML="hello javascript";

// };

// const mybutton1 = document.getElementById('button1');

const mybutton2 = document.getElementById("button2");

// mybutton1.onclick = function(){
//         mybutton1.document.getElementById('myimg').src='https://www.w3schools.com/js/pic_bulboff.gif';
// };

mybutton2.onclick = function () {
  mybutton2.document.getElementById("myimg").src =
    "https://www.w3schools.com/js/pic_bulboff.gif";
};

function Myfuncation() {
  document.getElementById("demoo").innerHTML = "paragraph changed.";
}

function calculateSum() {
  const num = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);

  const ans = num + num2;

  document.getElementById("ans").textContent = "The sum is:" + ans;
}

function innerhtml() {
  document.getElementById("innerHtml").innerHTML = "<h1>HEloo JS</h1>";
}



function tocelsius(f){

    return (5/9) * (f-32);
}

  let value = tocelsius(77);
  document.getElementById("demm").innerHTML = value;


let text = "Outside: " + typeof carName;
document.getElementById("fun1").innerHTML = text;

function myFunction() {
  let carName = "Volvo";
  let text = "Inside: " + typeof carName + " " + carName; 
  document.getElementById("fun").innerHTML = text;

};

myFunction();

const person = {
    firstName:"john",
    lastName:"doe",
    age:50,
    eyeColor:"blue"
};


document.getElementById("demo").innerHTML = person.firstName + "is"+ person.age +"years old.";


const person1 = {};

// add properties
person.firstName = "john";
person.lastName = "Doe";

