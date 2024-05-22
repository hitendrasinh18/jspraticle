function palindrom(){

    let a = document.getElementById("palin").value;

    let b = a.split("").reverse("").join("");

    if(a==b){

        document.getElementById("result").innerHTML = "Palindrome"
     }else{
        document.getElementById("result").innerHTML = "Not palindrome"
     }
}