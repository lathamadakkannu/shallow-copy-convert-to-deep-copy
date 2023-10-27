let obj1={
    name:"anna",
    age:21,
    color:{
        favcolor1:"green",
        favcolor2:"white"
    }
}
let result=(obj1)=>{
let obj2=JSON.parse(JSON.stringify(obj1))
    obj2.color.favcolor1="black"
    console.log(obj1,obj2);
}
result(obj1)