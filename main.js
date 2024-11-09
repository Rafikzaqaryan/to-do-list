const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")
const total = document.querySelector("#total")
let i=0
btn.addEventListener("click", (e) =>{
  i++
  
 
  createDeleteElements(input.value)
  input.value = ""
})


function createDeleteElements(value) {

}