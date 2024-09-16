let a=10000;
let b=5506;
let c=555;
// if((a>b) && (a>c))
// {
//   console.log("a is bigger");
// }
// else if ((b>a) && (b>c))
// {
//   console.log("b is bigger");
// }
// else if ((c>a) && (c>b))
// {
//   console.log ("c is bigger");
// }
// else
// {
//   console.log("error or one of them having the same value");
// }
((a>b) && (a>c)) ? console.log("a is bigger") : ((b>a) && (b>c)) ? console.log("b is bigger") : ((c>a) && (c>b)) ? console.log ("c is bigger") : console.log("error or one of them having the same value");