 const getProperty =<T,K extends keyof T> ( param:T,key:K) =>{
return  param[key]
 }

const user ={
  name:'Dipto',
  age:20
}
 const rejar = getProperty (user,'name')

 console.log(rejar);
 
 