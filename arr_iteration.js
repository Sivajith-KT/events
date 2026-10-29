//map
let arr=[1,2,3,4,5]
const result=arr.map((num)=>num*5)
console.log(result)

let marks=[44,50,30,35,98,42]
let pass_or_fail=marks.map((mark)=>{
    if(mark>40){
        return "pass"
    }else{
        return "fail"
    }
})
console.log(pass_or_fail)

//Change the string array into uppercase array
let fruits=["apple","banana","orange","avocado"]
const result=fruits.map(item=>item.toUpperCase())
console.log(result)

//Get length of each string in an array 
let cars=["bmw","toyota","mini cooper"]
const result=cars.map(item=>item.length)
console.log(result)

//Square every number in an array
let square=[1,2,3,4,5]
const result=square.map(item=>item*item)
console.log(result)

//filter
let numbers=[10,25,30,45,50]
let greaterthan30=numbers.filter(num=>num>30);

console.log(greaterthan30);

let numbers=[4,5,8,7,12,41,32,56,89,90]
let even_number=numbers.filter(num=>num%2==0)
console.log(even_number)

//reduce
let numbers=[1,2,3,4];
let sum=numbers.reduce((acc,currentvalue)=>acc+currentvalue,0);
console.log(sum);

let arr1=[1,2,3,4]
let product=arr1.reduce((acc,curr)=>acc*curr,1)
console.log(product)

let arr2=[23,55,36,66,67,90]
let max=arr2.reduce((acc,curr)=>acc>curr?acc:curr)
console.log(max)

//foreach

let fruits = ["apple","banana","mango"];
fruits.forEach(item=>console.log(item));
console.log(fruits)

let score=[51,65,87,98]
let sum=0;
score.forEach((score)=>{
    sum+=score;
})
console.log(sum)

//find
let arr3=[1,2,3,32,45,47]
let result=arr3.find((num)=>num>30)
console.log(result)

let result4=arr3.find((num)=>num%2==0)
console.log(result4)