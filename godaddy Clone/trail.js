console.log("hello");

let words=['t', 'r', 'a', 'n', 's', 'l', 'a', 't', 'e', '(','-','1', '0', '%', ')'];
let count=0;
let result="";
for(let i of words){
    if(i=='('){
        console.log("working");
        count++;
    }
    if(i=='%'){
        break;
    }
    if(count>0 && i!='('){
        console.log(i);
        result+=i;
    }
    console.log(count);
    // console.log("loop count is"+ typeOf(i);
}
console.log(result);