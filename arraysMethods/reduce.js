const nums = [1,2,3,4];

const sumReduce = nums.reduce((sum, element)=> sum += element);

console.log(sumReduce);


const numbers = [2,4,3,5,6,2,4,2,4,1,6,5,6,7,7,8,2,6,6,8,9];

const findReduce = numbers.reduce((obj,item)=>{
    if(item <= 5){
        obj['1-5']++
    }
    else if(item <=8){
        obj['6-8']++
    }else{
        obj['9-10']++
    }
    return obj
},{
    '1-5':0,
    '6-8':0,
    '9-10':0
});

console.log(findReduce);

const objects = [
    {
       customerName:"juan",
       level: "low",
       price: ""
       

    },
   {
    customerName:"santiago",
       level: "medium",
      price:""
    },
    {
        customerName:"carlos",
       level:"hight",
       price:""
    },
    {
        customerName:"maria",
         level: "low",
         price:""

    }

];

const returnLevels = objects.map(item => item.level)
.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] = obj[item]+1;
    }
  return obj
},{});

console.log(returnLevels);