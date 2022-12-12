const inputTexto = document.querySelector(".input-texto")
const mensagem = document.querySelector(".mensagem")

function btnCodificar() {
  const textoCodificado = codificar(inputTexto.value)
  mensagem.value = textoCodificado
  document.style.backgroundImage = "none"
}

function codificar(stringCodificada){
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

stringCodificada = stringCodificada.toLowerCase()

for(let i = 0; i < matrizCodigo.length; i++){
   if(stringCodificada.includes(matrizCodigo[i][0])){
    stringCodificada = stringCodificada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
   }
  }
  return stringCodificada
}

function btnDecodificar() {
  const textoDecodificado = decodificar(inputTexto.value)
  mensagem.value = textoDecodificado
}

function decodificar(stringDecodificada){
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

stringDecodificada = stringDecodificada.toLowerCase()

for(let i = 0; i < matrizCodigo.length; i++){
   if(stringDecodificada.includes(matrizCodigo[i][1])){
    stringDecodificada = stringDecodificada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
   }
  }
  return stringDecodificada
}