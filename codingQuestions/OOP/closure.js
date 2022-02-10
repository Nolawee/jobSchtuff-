// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log('Outer Variable: ' + outerVariable)
//         console.log('Inner Variable ' + innerVariable);
//     }
// }

// console.log(outerFunction('outerTest'));


for (var i = 0; i < 3; i++) {

    //creates a block scope 
    ((p)=>{
        setTimeout(() => {
            console.log('timeout console '+ p);
        }, 1000);
    })(i);

    // console.log('normal console '+ i)

}


console.log('after the loop')