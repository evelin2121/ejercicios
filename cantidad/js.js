function foo (j){

 
var foo = [ 1, 2, 3, 4, 5, 6 ];
 
for( i = 0, j = foo.length; i < j; i++ ){  
  foo[ i ] = foo[ i ] * 2; // multiply each value by 2
}
 
console.log( foo ); // [2, 4, 6, 8, 10, 12]