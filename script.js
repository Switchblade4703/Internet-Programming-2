const cars = ["Saab", "Volvo", "BMW", "things"];


var D = function(x){
    x += 1;
    console.log(x);
}
// console.log(parameter(1));

function parameter2(num, i ){
    if (num % 2 == 1 )
    {
        console.log("The number is odd");
    }
    else{
        i(num); 
    }
}

for (let index in cars) {
    parameter2(index, D);

  }