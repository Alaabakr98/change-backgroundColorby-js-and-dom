

document.addEventListener("click" ,function(){
    var r =Math.round( Math.random()*225);
    var g=Math.round( Math.random()*225);
    var b =Math.round( Math.random()*225);
    this.body.style.backgroundColor=`rgb(${r} ,${g} ,${b})`
 
})