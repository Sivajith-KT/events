function Student(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password;
}
let s1=new Student("siv","132@","1352536")
let s2=new Student("anu","1432@","12536")
console.log(s1)
console.log(s2)

function Person(name,city,state){
    this.name=name;
    this.city=city;
    this.state=state;
}

let p1=new Person("siv","pkd","kerala")
let p2=new Person("anu","kochi","kerala")
let p3=new Person("aju","calicut","kerala")
let p4=new Person("sree","pkd","kerala")
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)

function Employee(name,salary){
    this.salary=salary;
    this.name=name;
    this.showDetails=function(){
        console.log(`${this.name} have salary ${this.salary}`)
    }
}
let emp1=new Employee('anshif',300000)
console.log(emp1)
emp1.showDetails()

function Car(model,varient,type){
    this.model=model;
    this.varient=varient;
    this.type=type;
    this.description=function(){
        console.log(`${this.model} this is bmw varient top model ${varient} ${type} petrol`)
    }
}
let car1=new Car('2020','petrol','m4')
console.log(car1)
car1.description()