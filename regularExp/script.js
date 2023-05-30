//regular expresssions are objects used to perfrom patterns matching

// 
// let regex=/hello/g
// let str1="hello welcome to our youtube channel say hellowe if you"
// // exec() it returns the an array if the word is present in the string other wise it will return null if sting not present

// let output=regex.exec(str1);
// console.log(output)
// console.log()

//text() if a particular word exist in the string it will return ture if not it retunts false

// let output=regex.test(str1);
// console.log(output);
//match() function will return arry of array 
// let output=str1.match(regex);
// console.log(output)
// for(let i=0; i<output.length; i++){
//     console.log(output[i])
// }
//replace() all hello world replace in the string
// let output=str1.replace(regex, "hi")
// console.log(output);

// let regex=/we.come/g // 
//let regex=/^welcome/g // it returns true if the string starts with welcome word
// let regex=/back$/
// let regex=/welc?ome?/
// let regex=/[^def]def/ // exclde the some words then we use caret ^
// let str1="this string contains defdef";
// let output=regex.test(str1)
// console.log(output)
// let op=regex.exec(str1);
// console.log(op)

function employee(){

    let ids=document.getElementById("eid").value;
    var check=/[DE]253[10-99]/
    if(check.test(ids)){
        alert("vali empoyee id")
    }
    else{
        alert("invalid id")
    }
}






