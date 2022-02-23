const list = ['a', 'b', 'c']
const list2 = ['d','e','f']

const newList = list2;

for(let i = 0; i<list.length;i++){
    element = list[i];
    newList.push(element);
    
}
console.log(newList);

const concatElements = list.concat(list2);