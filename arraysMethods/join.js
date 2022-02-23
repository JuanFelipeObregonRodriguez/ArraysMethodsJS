const pets = ["dog", "cat", "fish"]

const divideLines = "--"
let resultChain = ""
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    resultChain = resultChain + (index == 0 ? "":divideLines) + element; 
}    

const chainPets = (array) =>{
    const runPets = array.join("--")
    console.log(runPets);
}
chainPets("join method",pets)
console.log(resultChain);


const newUrl = "the best website in the world"
const urlGen = (arrayUrl)=>{

    const runUrl = arrayUrl.split("").join("-").toLowerCase("")
     console.log(runUrl);
    
};
 
urlGen(newUrl)

