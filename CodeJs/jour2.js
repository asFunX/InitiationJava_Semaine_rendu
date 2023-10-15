/*
let a = 4
let b = 5
let somme = addition(a+b)

function addition (number1,number2){
    return number1 + number2
}
*/

/*
let a = 'Jean'
let b = 'Paul'
let result = checkName(a,b) 

function checkName(name1, name2){
    return name1 === name2 
}
console.log(result)
*/

/*   
let names  = []
names.push('vincent','paul','arthur')
names.forEach(function(name) {
    
    console.log(name + ' va à la pêche')
})
*/

/*
const student = {
    name: "John",
    favoriteFood: "Pizza",
    city: "New York",
};
*/

/*
function calculateCharacterSum(obj) {
    let sum = 0;
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            sum += obj[prop].length;
        }
    }
    return sum;
}


const characterSum = calculateCharacterSum(student);


if (characterSum % 2 === 0) {
    console.log("pair");
} else {
    console.log("impair");
}
Correction : 
let student = {
    name: "Jean",
    favoriteFood: "Burger",
    city: "Bezons",
}

let values = Object.values(student)
let nombreDeLettres = 0

values.forEach((value) => {
    nombreDeLettres += value.length
})

if (nombreDeLettres % 2 === 1) {
    console.log("impair")
} else {
    console.log("pair")
}
*/
/*
let users = ['Stephanie','gaïa','Etienne','Michel','Roberto','Julie']
    function countCharacter(Value){
        return Value.length
    }

    users.forEach(user =>{
        if (countCharacter(user) > 5) {
            console.log("c'est un prénom long de plus de 5 lettres.")
        }
        else {
            console.log("ce n'est pas un prénom long de plus de 5 lettres ")
        }
    })
*/