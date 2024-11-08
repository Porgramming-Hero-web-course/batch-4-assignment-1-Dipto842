
class Car {
    make:string;
     model:string

     year:number
    constructor(make:string,model:string,year:number) {
        this.make=make
        this.model=model
        this.year=year
    }
   set setCarAge (Year:number) {
        this.year=this.year-Year
    }
get getCarAge(){
    return this.year
}
}

const car = new Car('dd',  '44',  2024)

console.log(car);
const chek = car.setCarAge = 2010
const get = car.getCarAge 
console.log(get);

