



function findPairs(array, sum)
{
    let pairedArray = [];
    for(i=0;i<array.length;i++){
        for(j=i;j<array.length;j++){
            if(array[i] + array[j] == sum){
                // pairedArray.push({[array[i]] : array[j]}, sum)
                // pairedArray.push(array[i],array[j]);
                pairedArray.push([array[i], array[j]], sum)
            }
               
            
        
        }
}
return pairedArray;

}
console.log(findPairs([1,3,4,5,6,7,8,9], 12))