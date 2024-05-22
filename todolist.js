function openform(){
   
    document.getElementById("hideform").style.display = "block"
}
function clears(){

    document.getElementById("hideform").style.display = "none"
}

function addtask(){

    let x = document.getElementById("names").value 
    let y = document.getElementById("tasks").value 
    let z = document.getElementById("prioritys").value
    let w = document.getElementById("dates").value
    
    let data =JSON.parse(localStorage.getItem("item"))

    if (data===null){
        data=[];

    }
        
    data.push({
        a:x,
        b:y,
        c:z,
        d:w,
    }
 )

    localStorage.setItem("item",JSON.stringify(data))
    console.log(JSON.parse(localStorage.getItem("item")))
    
    let a = document.getElementById("tbody")


    data.forEach(items => {

        let row = document.createElement("tr");

        let r1 = document.createElement("td");
        let r2 = document.createElement("td");
        let r3 = document.createElement("td");
        let r4 = document.createElement("td");

        r1.innerHTML = items.a
        r2.innerHTML = items.b
        r3.innerHTML = items.c 
        r4.innerHTML = items.d


        row.appendChild(r1)
        row.appendChild(r2)
        row.appendChild(r3)
        row.appendChild(r4)

        a.appendChild(row)
    
        
        
    });
}



