function request() {
  // solicitar que indique que es lo que desea realizar, cifrar o decifrar
  do {
    var responce = prompt('Indique el número de lo que desea hacer: 1)cifrar - 2)decifrar');
    if (responce !== '') {
      // si se responde cifrado, pasa a la función cipher
      if (responce === '1') {
        cipher();
      // si se responde decifrar, pasa la función decipher
      } else if (responce === '2') {
        decipher();
      // si se coloca una opción diferente, se alerta el mensaje
      } else {
        alert('Ingrese una opción valida');
      } 
    }
  // si no se responde nada, se vuelve a preguntar
  } while (responce === '' || (responce !== '1' && responce !== '2'));
}

function cipher() {
  // variable para preguntar cual es la palabra a cifrar
  var resCiper = (prompt('Indique la palabra que desea cifrar')).toUpperCase();
  // crear un array para recorrer
  var arrCiper = resCiper.split('');
  var myCipher = [];
  // recorrer la palabra
  for (i = 0; i < arrCiper.length; i++) {
    myCipher.push(String.fromCharCode((((arrCiper[i].charCodeAt() - 65) + 33) % 26) + 65));
    var finalPhrase1 = myCipher.join('');
  }

   
  alert('Tu palabra cifrada es ' + finalPhrase1);
}

function decipher() {
  // varibale para preguntar cual es la palabra a decifrar
  var resDecipher = (prompt('Indique la palabra que desea decifrar')).toUpperCase();
  var arrDecipher = resDecipher.split('');
  var myDecipher = [];
  
  for (i = 0; i < arrDecipher.length; i++) {
    myDecipher.push(String.fromCharCode(((((arrDecipher[i].charCodeAt() - 65) - 7) + 52) % 26) + 65));
    var finalPhrase2 = myDecipher.join('');
  }
  
  alert(('Tu palabra descifrada es ' + finalPhrase2).toLowerCase());
}

request();