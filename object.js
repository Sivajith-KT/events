let person={
    name: "siv",
    age: 21,
    city: "pkd"

};
console.log(person)

let person2={}
person2.first_name="sivv"
person2.school="kdm"
person2.first_name="abhi"
person2.school="kdm"
console.log(person2)

const student={
    firstname:"abhi",
    lastname:"siv",
    age:15,
    eyecolor:"blue"
}
console.log(student.firstname)
console.log(student["lastname"])

let student=[
    {name:"abhi",mark:70},
    {name:"anu",mark:25},
    {name:"arun",mark:20},
]
let fail_array=student.filter((std)=>std.mark<40)
console.log(student)

const student={
    name:"anu",
    age:20
}
console.log(student)
//adding new property
student.gender='female'
student.class=8;
student.city='calicut'
console.log(student)
//updating
student.city='kochi'
console.log(student)
//delete
delete student.class
console.log(student)

const person={names:"alice",age :25};
//without destructuring
// let names=person.names;
// let age=person.age;
// console.log(names,age)

// //with destructuring
// const {names,age}=person
// console.log(names,age)

//renaming
const user={id: 1, username: "siv"};
const {id,username:name}=user;
console.log(id,name)

//default values
let student={
    name:"rahul"
};
const{name,age=18}=student;
console.log(age)

//array destructuring
const numbers=[10,20,30];
// const a=numbers[0];
// const b=numbers[1];
// const c=numbers[2];
// console.log(a,b,c)

//with distructuring
const [a,b,c]=numbers
console.log(a,b,c)

//object destructuring with function
//without
function display(user){
    console.log(user.name)
    console.log(user.email)
}
const user={name:"siv", email:"abc@gmail.com"}
display(user)


function display({name,email}){
    console.log(name)
    console.log(email)
}
const user={name:"siv", email:"abc@gmail.com"}
display(user)

