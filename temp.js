function temp(){
    
    let celsius = document.getElementById("cel").value 
    let fehrenait = document.getElementById("fah").value

    celsius = (fehrenait - 32) * 5/9;

    document.getElementById("cel").value = celsius
}
function temps(){

    let celsius = document.getElementById("cel").value 
    let fehrenait = document.getElementById("fah").value


    fehrenait = (celsius * 9/5) + 32;

    document.getElementById("fah").value = fehrenait;

}