const Matrix = require("matrix-js");

let A = Matrix([
    [1,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,1],
    [0,0,0,1,0]
]);
//Code here
function degree(mtrx,v){
  let sum= 0;
  let degreelist= A(v);
  for(a=0;i<degreelist.length;i++){
    if(martx(v-1)[i]==1){
    let sum= sum+ degreelist(i)
}
return sum
}
function degreecentrality(mtrx,v){
  return degree(mtrx,v)/(mtrx().length-1)
}

}

//Challenge

//Run test code with ctrl+shift+p  then type in "script"
