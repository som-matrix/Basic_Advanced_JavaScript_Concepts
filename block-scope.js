// var a = 100 // it is the shadowed of var a inside the block scope
// let b = 25 // now this is not shadowed because it has completely a diffrent memory location
// const c = 35
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// Lexical scope
const a = 25
{
    // const a = 15
    {
        // const a = 25
        console.log(a)
    }
}
