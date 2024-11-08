
const validateKeys =<V extends object>(ob: V,key:(keyof V)[]):boolean =>{
// if(velu[key]) {
//     return true
// }else{
//     return false
// }

return key.every(keys=>keys in ob)

}

const person = { name: "Alice", age: 25, email: "alice@example.com" }
console.log(validateKeys(person, ["name", "age"]));








