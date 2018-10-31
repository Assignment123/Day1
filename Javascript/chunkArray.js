function chunkArray(array1,size){
    valarray1=[];
    for (i=0;i<array1.length;i+=size){
        valarray1.push(array1.slice(i,i+size));
    a    }
    return valarray1;

}
var value=chunkArray([1,2,3,4,5,6,7],2);
console.log(value);
