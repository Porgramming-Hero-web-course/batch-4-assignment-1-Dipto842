
type Circle= {
    shape: "circle"
    radius :number
}
type RectangleArea ={
    shape: "rectangle",
    width: number
    height: number
}
type Shape = Circle |RectangleArea

const calculateShapeArea =(shape:Shape)=>{
if(shape.shape==='circle'){
    return Math.PI *shape.radius * shape.radius
}else if(shape.shape==='rectangle'){
    return shape.width * shape.height
}else{
    throw new Error('Please use it circle or rectangle ')
}

}

const circleArea = calculateShapeArea({ shape: "rectangle", width:10,height:2 });

console.log(circleArea);
