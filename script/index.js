
let cript = {
  'c': 'p',
  'h': 'l',
  'a': 'u',
  'v': 't',
  'e': 'o'
  
};

function criarDicionarioReverso(objeto) {
  let reverso = {};
  for (let chave in objeto) {
      reverso[objeto[chave]] = chave;
  }
  return reverso;
}


let criptReverso = criarDicionarioReverso(cript);

function transformar() {
  let inputText = document.getElementById('inputText').value;
  let novoTexto = '';

  for (let i = 0; i < inputText.length; i++) {
      let letra = inputText[i];
      let letraLower = letra.toLowerCase();
      if (cript.hasOwnProperty(letraLower)) {
          let transformed = letra === letra.toLowerCase() ? cript[letraLower] : cript[letraLower].toUpperCase();
          novoTexto += transformed;
      } else if (criptReverso.hasOwnProperty(letraLower)) {
          let transformed = letra === letra.toLowerCase() ? criptReverso[letraLower] : criptReverso[letraLower].toUpperCase();
          novoTexto += transformed;
      } else {
          novoTexto += letra;
      }
  }

  document.getElementById('outputText').textContent = novoTexto;
  document.getElementById('inputText').value = '';
}
