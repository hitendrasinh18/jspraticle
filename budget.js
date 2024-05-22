function budget(){
    let amount= document.getElementById("amount").value ;
    let text= document.getElementById("text").value ;
    let store= JSON.parse (sessionStorage.getItem("item"));
    

    if(store==null){
        store=[];
    }

    let type = "";
    
    if(amount>=0){
        type= "i"
    }else{
        type= "e"
    }

    store.push({
        amount : amount,
        text : text,
        type :type
    })
    sessionStorage.setItem("item",JSON.stringify(store));
    console.log(JSON.parse (sessionStorage.getItem("item")));

    sum = 0;
     store.forEach((x) => {

        sum += parseInt(x.amount);
        
     });

 document.getElementById("total").innerHTML = parseInt(sum)

 let his = document.createElement("li");

 let data = document.createTextNode(text+''+amount);

 his.appendChild(data);

 document.getElementById("hist").appendChild(his);

 let incomex = 0;
 let expense = 0;

 store.forEach((x) =>{
    if(x.type === "i"){
        incomex += parseInt(x.amount);
    }else{
        expense += parseInt(x.amount);
    }
    document.getElementById("inc").innerHTML = incomex;
    document.getElementById("expe").innerHTML = expense;


 })






    
}