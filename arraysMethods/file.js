export function hola(){
    console.log('hola parceros');
}


const promesa1 = new Promise((resolve, reject)=>{reject("reject")})
const promesa2 = new Promise((resolve, reject)=>{resolve("accepted")})
const promesa3 = new Promise((resolve, reject)=>{resolve("accepted 1")})

Promise.allSettled([promesa1, promesa2, promesa3])
.then(response => console.log(response))

console.log(window);
console.log(globalthis);

const foo = "obj" ?? 'default'
console.log(foo);

const user={}

console.log(user.profile.email);

if(user?.profile?.email){
    console.log("email");
}else{
    console.log("fail");
}


const texto = "javascript es mucho mas versatil que python"

const reemplazarTexto = texto.replace("javascript", "python")
console.log(reemplazarTexto);
const reemplazarTodo = texto.replaceAll("javascript", "python")
console.log(reemplazarTodo);


class messagge{
    show(val){  console.log(val);}
  
}