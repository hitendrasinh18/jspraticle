function primenumber(){

    let x = document.getElementById("prime").value ;

    let y = false;

    for(let i = 2; i<x; i++){

        if ( x % i == 0) {

           y = true;
        }
    }
        
        if(y==true)
        {
              document.getElementById("result").innerHTML = x + "This is  not prime number"
              

        } 
          else
        {
            document.getElementById("result").innerHTML = x + "This is Prime Number"
        }

      }
            
     
 




