const person = {
    firstName:"john",
    lastName:"Doe",
    age:50
};

let x = "firstName";
let y = "age";

document.getElementById('demo').innerHTML = person[x]+" is"+ person[y]+"years old.";



function person1(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}


const myFather = new person1("john","Doe",44,"blue");

document.getElementById("demo").innerHTML = "my father is "+myFather.age+".";


function person3(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myfather = new person3("john","Doe",50,"blue");
const mymother = new person3("sally","Rally",48,"green");

document.getElementById("demo").innerHTML = "MY father is "+myFather.age+".My mother is"+ mymother.age+".";


function person4(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    
    this.fullName = function(){
        return this.firstName + " " + this.lastName
    };
}

document.getElementById("demo").innerHTML = "my father is "+ myFather.fullName();


function peraon5(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function(){
        return this.firstName +" "+ this.lastName
    };
}

const myfather1 = new person("john", "Doe",50,"blue");
document.getElementById("demo").innerHTML = "my father is "+ myfather1.fullName();


