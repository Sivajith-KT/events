//spread operator
let a=[1,2,3]
let b=[4,5,6]
const c=[...a,...b]//merging
console.log(c)

let obj1={name:"abc",age:10}  //function
let obj2={city:"kochi",state:'kerala'}
let merged_object={...obj1,...obj2}
console.log(merged_object)

//spread op clone object
let obj3={email:"abc@gmail.com",password:123456}
let clone={...obj3}  //creating shallow copy of obj3
console.log(clone)
clone.email='def@gmail.com'
console.log(clone)
console.log(obj3)

//update object
let product={
    name:"laptop",
    price:60000
};
let updated={
    ...product,
    stock:true
};
console.log(product);

//rest parameter
function myfun(...args){
    console.log(args);
}
myfun(1,2,3,4,5);

function sum(...a){
    let total=0;
    for(let num of a){
        total+=num
    }
    console.log(total)
}
sum(2,3,4,5,6,7,8,9)

//rest oprator
let employee={
    name:"siv",
    department:"sales",
    salary:500000,
    city:"calicut"
}
const {name,department,...remaining}=employee
console.log(name)
console.log(department)
console.log(remaining)