console.log(2);
console.log(3);//added new feature
console.log(4);

const age=89;
const ans=new Promise((resolve,reject)=>{
    if(age<18){
        reject("age is less");
    }
    else{
        resolve("you are elidhible");
    }
})

ans.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})