var array = [1,2,3,4,5,2,6,8,6,3,4,7,8,6,4,2,3,46,7,7,5,3,2,3,45,54];
console.log("Ricorsivo: prima: "+array);
//function swap(aa,ab){
  //  if(aa.length==0)
  //  /    return ab;
  //  else {
   //     ab.push(aa.pop());
    //    return swap(aa,ab);
    //}
//}

function ex_9_R(aa){
    return (aa.length==1)?aa[0]:new Array(0).concat(aa.pop(),ex_9_R(aa));
}
console.log("Ricorsivo: dopo: "+ex_9_R(array));
//O(n)