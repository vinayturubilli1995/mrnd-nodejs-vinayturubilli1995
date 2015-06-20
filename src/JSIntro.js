
exports.Sum = function(num1, num2){
   return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
   var i,sum=0,len=arrayOfNums.length;
   for(i=0;i<len;i++)
        sum+=arrayOfNums[i];
   return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
var i,j,sum=0,len=arrayOfNums.length;
for(i=0;i<len;i++)
{
   for(j=i-1;j>=0;j--)
        if(arrayOfNums[j]==arrayOfNums[i])
            break;
   if(j==-1)
       sum+=arrayOfNums[i];
}
return sum;
}

exports.ReverseString = function(str){
return str.split("").reverse().join("");

}


exports.ReverseArrayOfStrings = function(arrayOfStrings){


}