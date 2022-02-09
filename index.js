
let outputscreen = document.getElementById("outputscreen");

function display(num){
    outputscreen.value += num;
}
Calculate=()=>{
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
        alert("invalid");
    }
}
clear=()=>{
    outputscreen.value="";
}
del=()=>{
    outputscreen.value = outputscreen.value.slice(0,-1);
}
