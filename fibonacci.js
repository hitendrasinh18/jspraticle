function fibo(){

    let x = document.getElementById("num").value;
    
   let a=0;
   let b=1;
   let result;

    for(let i=2; i<=x; i++)
        {
            result=a+b;
            a=b;
            b=result;

        }
        document.getElementById("resu").innerHTML = result;




}