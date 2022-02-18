let fruits = ["banana","mazorca","mora","frambuesa"];
const newArray = [""];
for(let index = 0; index<fruits.length;index++){
    const item = fruits[index];
    if(item.length >=5){
        newArray.push(item);
    }
}
console.log(newArray);
console.log(fruits);

const fruit = fruits.filter(item => item.length >=6);
console.log(fruit);

const orders = [
    {
       customerName:"juan",
       total: 50,
       delivery:true,

    },
   {
    customerName:"santiago",
       total: 60,
       delivery:false,
    },
    {
        customerName:"carlos",
       total: 45,
       delivery:true,
    },
    {
        customerName:"maria",
       total: 48,
       delivery:false,
    }

];

const filterOrders = orders.filter(item => item.delivery && item.total >=50);
console.log(filterOrders);