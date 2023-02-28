let display = document.getElementById("display-content");

let j = 0;
function dis(i){
    display.innerHTML = display.innerHTML + i;
    // console.log(i)

    
}

// let arr = display.value
// function dis(){
//    console.log(arr)
// }
function clr(){
    display.innerHTML = "";

    console.log(1)
}
function execute(){
    let arr = [] 
   arr = display.innerText
   eval(arr)
   display.innerHTML = eval(arr)
 
   
}