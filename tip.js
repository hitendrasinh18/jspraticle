function tip(){
    let am = parseInt(document.getElementById("amounts").value) 
    let tips = parseInt(document.getElementById("int").value) 

    let calc = am * tips/100

    let gst = am * 18 / 100

    let total = am + calc + gst

    

    document.getElementById("result1").innerHTML = "Amount:-  " + am;
    document.getElementById("result2").innerHTML = "Tip:-  " + calc;
    document.getElementById("result3").innerHTML = "gst:-  " + gst;
    document.getElementById("result4").innerHTML = "total:-  " + total;

}