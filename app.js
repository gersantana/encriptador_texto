
const inputText = document.getElementById("input")
const btnEncriptar = document.getElementById("encriptar")
const btnDesencriptar = document.getElementById("desencriptar")
const outputText = document.getElementById("output")
const btnCopiar = document.getElementById("copyBtn")


// pruebas elementos interactivos
// inputText.addEventListener('input', ()=>{
//     console.log(inputText.value)
//     outputText.innerHTML = `<p>${inputText.value}</p>`
//   })


const encryptionMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Mapeo inverso para desencriptar
const decryptionMap = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

// Función para encriptar el texto
function encrypt(text) {
    return text.split('').map(char => encryptionMap[char] || char).join('');
}

// Función para desencriptar el texto
function decrypt(text) {
    return text.replace(/enter|imes|ai|ober|ufat/g, match => decryptionMap[match]);
}


// Función para manejar el botón de encriptar
btnEncriptar.addEventListener('click', () => {
    const inputTextValue = inputText.value
    const encryptedText = encrypt(inputTextValue);
    updateOutput(encryptedText);
});

// Función para manejar el botón de desencriptar
btnDesencriptar.addEventListener('click', () => {
    const inputTextValue = inputText.value
    const decryptedText = decrypt(inputTextValue);
    updateOutput(decryptedText);
    btnCopiar.classList.remove("hidden")

});

// Función para actualizar la salida en la interfaz
function updateOutput(text) {
    outputText.innerHTML = `<p>${text}</p>`;
    if(text){
        btnCopiar.classList.remove("hidden")

    }else{
        btnCopiar.classList.add("hidden")
    }

   }

// Opcional: Función para copiar el texto al portapapeles
function copiarTexto(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    });
}

btnCopiar.addEventListener('click', () =>{
    copiarTexto(outputText.textContent)
})