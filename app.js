
const inputText = document.getElementById("input")
const btnEncriptar = document.getElementById("encriptar")
const btnDesencriptar = document.getElementById("desencriptar")
const outputText = document.getElementById("output")

// pruebas elementos interactivos
inputText.addEventListener('input', ()=>{
    console.log(inputText.value)
    outputText.innerHTML = `<p>${inputText.value}</p>`
  })
btnEncriptar.addEventListener('click', () => {
    console.log("click btn enciptar")
})
btnDesencriptar.addEventListener('click', () => {
    console.log("click btn desenciptar")
})