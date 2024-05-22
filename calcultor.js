function display (val){
    let x = document.getElementById("display").value += val;
}
function clearscreen(){
    let x = document.getElementById("display").value = "";
}
function slove(){
    let x = document.getElementById("display").value 

    let y = eval(x)

    document.getElementById ("display").value = y
}