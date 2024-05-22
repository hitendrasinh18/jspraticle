function oddeve(){

    let a = document.getElementById("oddeven").value

    if(a%2==0){

       document.getElementById("result1").innerHTML = a + ":-This is evennumber"
    }
    else{
        document.getElementById("result1").innerHTML = a + ":-This is oddnumber"
    }

}