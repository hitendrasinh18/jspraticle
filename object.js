
let objects = [];
function objarray(){
    let x = document.getElementById("abc").value;
    let y = document.getElementById("abcd").value;
    let z = document.getElementById("abcde").value;

    console.log(x);
    console.log(y);
    console.log(z);

    objects.push(
        {
            Name : x,
            City : y,
            Mobile : z,
        }
    )

    document.getElementById("result").innerHTML = JSON.stringify(objects) ;
}