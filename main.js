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
   
  const li = document.createElement("li")
  li.className = "li"
  li.textContent =value

  const btn = document.createElement("button")
  btn.className = "btn"
  btn.textContent = "remove"


  li.appendChild(btn)
  btn.addEventListener("click", (e)=>{
    result.removeChild(li)
    i--
})
li.addEventListener("click", (e)=>{
  li.classList.toggle("li-active")
})
result.appendChild(li)
}