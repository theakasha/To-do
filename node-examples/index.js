var rect=require('./rectangle');

function solveRect(l,b){
    console.log("Solving the rectangle with l = "+l+"and b "+b);

    if(l<=0||b<=0){
        console.log("Rectangle dimensions invalid");
    }
    else{
        console.log("The area of the rectanglse is "+rect.area(l,b));
        console.log("The perimeter is "+ rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-4,5);