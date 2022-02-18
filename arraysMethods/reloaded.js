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
console.log("original:", orders);
const order = orders.map(item => item.total);
console.log("total:", order);

const order2 = orders.map(item =>{
    item.tax = .19;
    return item
});

console.log("order 2",order2);
const order3 = orders.map(item =>{
    return {
        ...item,
        tax: .19,
    }
});

console.log(order3);

