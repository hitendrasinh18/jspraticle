let arr = []

function avrages(){
   
    let x = parseInt(document.getElementById("name").value); 

    arr.push(x)
 let sum = 0;

    for( let i = 0; i<arr.length; i++){

        sum += arr[i];
       console.log(sum);
       
 }
    document.getElementById("result").innerHTML  = "sum of array:-" + parseInt(sum);
     
   let avrage = sum/arr.length
     
    document.getElementById("result1").innerHTML = "Avrage of Array" + avrage;



} 

