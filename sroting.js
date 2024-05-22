let arr =[];

function sroting(){

    

    let x = document.getElementById("num").value ;

    arr.push (x);
    console.log(arr);

    let asort = arr.sort(function(a,b){
        return a-b;
        //a -b assending mate 
    })

    // let asort = arr.sort((a,b)=>{
    //     return a-b;
    //     //a -b assending mate 
    // })


    document.getElementById("asrot").innerHTML = asort;

    let dsort = arr.sort (function(a,b){
        return b-a;
        //b-a desensing mate
    })
    document.getElementById("dsrot").innerHTML = dsort;



}
