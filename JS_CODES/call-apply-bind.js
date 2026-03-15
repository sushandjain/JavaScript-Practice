let person={
    name:"sushan"
}
let person1={
    name:"rohit"
}
 function city(city,state){
     console.log(this.name, `is from ${city} and state${state}`);  
}
let fun=city.bind(person,"puttur","karnataka")
let fun1=city.bind(person1,"puttur","karnataka")
fun()
fun1()