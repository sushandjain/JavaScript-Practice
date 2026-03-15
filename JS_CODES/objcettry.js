// class Student{
//     #name
//     constructor(name,age){
//         this.#name=name
//         this.age=age
//     }
    // getname(){
    //     return this.#name
    // }
//     setname(name){
//          this.#name=name
//          return console.log(this.#name);
         
//     }
// }
// let s1=new Student("sushan",18);
// s1.setname("hhh")
// s1.#name="gagan";
// console.log(s1[#name]);
// console.log(s1.getname());






//normal object or static object  CHANGE ARROW FUN
// let person={
//     name:"scott",
//     age:22,
//     greet:function(){
//         console.log("hello "+this.name);
        
//     }
// }

// person.greet()



//making dynamic constructor function explain rules
// function Student(name,age){
//    this.name=name
//    this.age=age
// }
// const s1=new Student("sus",21)
// console.log( s1);





//greeting and understanding prototype

// function Student(name,age){
//    this.name=name
//    this.age=age
//    this.greet=function(){
//     return console.log(this.name);
//    }
// }
// const s1=new Student("sus",21)
// s1.greet()




// ⚠️ Problem (IMPORTANT CONCEPT) Every object gets its own copy of `introduce()` SOLUTION prototype
// function Student(name,age){
//    this.name=name
//    this.age=age
// }
// Student.prototype.greet=function(){
//     console.log("hello"+this.name);
// }

// const s1=new Student("sushan",21)
// const s2=new Student("gagan",30)

// console.log(s1.hasOwnProperty("name"));      // true
// console.log(s1.hasOwnProperty("introduce"));






// classes


// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     introduce() {
//     console.log("Hi, I am " + this.name);
//   }
// }

// let s1 = new Student("Sushan", 23);
// let s2 = new Student("Rahul", 22);





class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); //  calls parent constructor
    this.breed = breed;
  }
}
let b=new Animal("Tommy")
let d = new Dog( "Labrador");


console.log(b);

console.log(d);



// class Animal {
//   speak() {
//     console.log("Animal makes a sound");
//   }
// }
// class Dog extends Animal {
//   speak() {
//     console.log("Dog barks");
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log("Cat meows");
//   }
// }
