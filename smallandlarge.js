let arr = []

function abc(){
    let x = document.getElementById("small").value;

    arr.push(x);

    console.log(x);

    
let newarray = arr.sort(function(a,b){return a-b})
  
      
      let small = newarray[0];

        let large = newarray[newarray.length-1];

    document.getElementById("result").innerHTML = small + ":-small element";

    document.getElementById("resultt").innerHTML = large + ":-large element";
}







