let x=0
let y = 0
function decr() {
      y-=1
     console.log(y)
    document.getElementById("count").innerText=y
}
function incr() {
    x+=1
    console.log(x)
    document.getElementById("count").innerText=x
}
function rst() {
    x=0
    console.log(x)
    document.getElementById("count").innerText=x
}