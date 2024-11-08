
type add = number[]

function Add  (add:add):number[]{
  return  add.filter((item,index) =>add.indexOf(item)===index)
} 
const Ans :add =[2,1,3,1]
console.log(Add(Ans))   
