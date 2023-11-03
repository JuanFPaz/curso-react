
function suma(a,b,callback){
    let c = a + b;
    callback(c);
}

suma(5,6,(c)=>{
    const parrafo = document.getElementById("resultado")
    parrafo.innerHTML=`El resultado de la suma es ${c}`
});